import { toast } from 'react-toastify';
import { fetchSettings } from '../../api/Settings/fetchSettings';
import { supabase } from "../../supabase/supabaseClient";
import { ChangeEvent, useEffect, useState } from 'react';
import Input from '../../UX/Input';
import Button from '../../UX/Button';
import InputWrapper from '../../UX/InputWrapper';
import Label from '../../UX/Label';
import ComponentWrapper from '../../UX/ComponentWrapper';

const Settings = () => {
  const [settingsData, setSettingsData] = useState({
    minNight: '',
    maxNight: '',
    maxGuest: '',
    breakfast: ''
  });

  useEffect(() => {
    const loadSettings = async () => {
      const settings = await fetchSettings();
      if (settings && settings.length > 0) {
        setSettingsData(settings[0]);
      }
    };

    loadSettings();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettingsData((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const {...updatedData } = settingsData;
    const { error } = await supabase
      .from('Settings')
      .update(updatedData)

    if (error) {
      toast.error('Error updating settings');
    } else {
      toast.success('Settings updated successfully');
    }
  };

   const inputFields = [
    { labelText: 'Minimum nights/booking', name: 'minNight', value: settingsData.minNight },
    { labelText: 'Maximum nights/booking', name: 'maxNight', value: settingsData.maxNight },
    { labelText: 'Maximum guests/booking', name: 'maxGuest', value: settingsData.maxGuest },
    { labelText: 'Breakfast price', name: 'breakfast', value: settingsData.breakfast }
  ];

  return (
    <div className="main-settings">
      <ComponentWrapper type={'componentWrapper'}>
        <h2>Update hotel settings</h2>
          {inputFields.map((field, index) => (
            <InputWrapper key={index}>
            <Label>{field.labelText}</Label>
            <Input
              key={index}
              type="text"
              name={field.name}
              value={field.value}
              onChange={handleChange}
            />
            </InputWrapper>
          ))}
        <div className='button-wrapper'>
         <Button type={'success'} onClick={handleUpdate}>Update changes</Button>
        </div>
        </ComponentWrapper>
      </div>
  );
};
export default Settings;
