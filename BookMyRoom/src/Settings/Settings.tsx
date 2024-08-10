import { toast } from 'react-toastify';
import { fetchSettings } from '../api/fetchSettings';
import { supabase } from "../superbase/superbaseClient";
import { useEffect, useState } from 'react';
import Input from '../UX/Input';
import Button from '../UX/Button';
import InputWrapper from '../UX/InputWrapper';
import Label from '../UX/Label';

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
      console.log('settings', settings)
      if (settings && settings.length > 0) {
        setSettingsData(settings[0]);
      }
    };

    loadSettings();
  }, []);

  const handleChange = (e) => {
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
      <div className="settings-container">
        <h2>Update hotel settings</h2>
        <div>
          {inputFields.map((field, index) => (
            <InputWrapper key={index}>
              {console.log('ra',inputFields)}
            <Label>{field.labelText}</Label>
            <Input
              key={index}
              text="text"
              name={field.name}
              value={field.value}
              onChange={handleChange}
              inputClassName="user-input"
            />
            </InputWrapper>
          ))}
          <Button type={'success'} onClick={handleUpdate}>Update changes</Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
