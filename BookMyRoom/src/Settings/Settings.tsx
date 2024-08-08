import { toast } from 'react-toastify';
import { fetchSettings } from '../api/fetchSettings';
import { supabase } from "../superbase/superbaseClient";
import { useEffect, useState } from 'react';

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
    console.log('name',name,'value',value)
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
          <div className="settings-inputs">
            <label>Minimum nights/booking</label>
            <input
              type="text"
              name="minNight"
              value={settingsData.minNight}
              onChange={handleChange}
            />
          </div>
          <div className="settings-inputs">
            <label>Maximum nights/booking</label>
            <input
              type="text"
              name="maxNight"
              value={settingsData.maxNight}
              onChange={handleChange}
            />
          </div>
          <div className="settings-inputs">
            <label>Maximum guests/booking</label>
            <input
              type="text"
              name="maxGuest"
              value={settingsData.maxGuest}
              onChange={handleChange}
            />
          </div>
          <div className="settings-inputs">
            <label>Breakfast price</label>
            <input
              type="text"
              name="breakfast"
              value={settingsData.breakfast}
              onChange={handleChange}
            />
          </div>
          <button className='btn-update-settings' onClick={handleUpdate}>Update changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
