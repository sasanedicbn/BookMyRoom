import { toast } from 'react-toastify';
import { fetchSettings } from '../api/fetchSettings';
import { useEffect, useState } from 'react';

const Settings = () => {
  const [settingsData, setSettingsData] = useState({})

  useEffect(() => {
    const handleChange = async () => {
      const settings = await  fetchSettings()
      setSettingsData(settings)
      console.log(settings)
      toast.success('Settings updated successfully');
    };

    handleChange()
  }, [])
  

  return (
    <div className="main-settings">
      <div className="settings-container">
        <h2>Update hotel settings</h2>
        <div>
          <div className="settings-inputs">
            <p>Minimum nights/booking</p>
            <input
              type="text"
              // value={minNight}
            />
          </div>
          <div className="settings-inputs">
            <p>Maximum nights/booking</p>
            <input
              type="text"
              // value={maxNight}
            />
          </div>
          <div className="settings-inputs">
            <p>Maximum guests/booking</p>
            <input
              type="text"
              // value={maxGuest}
            />
          </div>
          <div className="settings-inputs">
            <p>Breakfast price</p>
            <input
              type="text"
              // value={breakfastPrice}
            />
          </div>
          <button onClick={handleChange}>Update changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
