import { toast } from 'react-toastify';
import { fetchSettings } from '../api/fetchSettings';
import { supabase } from "../superbase/superbaseClient";
import { useEffect, useState } from 'react';
import SettingsForm from './SettingsForm';

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
    const { id, ...updatedData } = settingsData;
    const { error } = await supabase
      .from('Settings')
      .update(updatedData)
      .eq('id', id);

    if (error) {
      toast.error('Error updating settings');
    } else {
      toast.success('Settings updated successfully');
    }
  };

  return (
    <SettingsForm 
      settingsData={settingsData}
      handleChange={handleChange}
      handleUpdate={handleUpdate}
    />
  );
};

export default Settings;
