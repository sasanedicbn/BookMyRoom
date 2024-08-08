import { toast } from 'react-toastify';
import { fetchSettings } from '../api/fetchSettings';
import { supabase } from "../superbase/superbaseClient";
import { useEffect, useState } from 'react';
import Input from '../UX/Input';
import { inputFields } from '../constants/constnsts';

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


  return (
    <div className="main-settings">
      <div className="settings-container">
        <h2>Update hotel settings</h2>
        <div>
          {inputFields.map((field, index) => (
            <Input
              key={index}
              className="settings-inputs"
              labelText={field.labelText}
              text="text"
              name={field.name}
              value={field.value}
              onChange={handleChange}
              inputClassName="user-input"
            />
          ))}
          <button className='btn-update-settings' onClick={handleUpdate}>Update changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
