import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateSetting } from '../store/settingsSlice';

const Settings = () => {
  const dispatch = useDispatch()
  const { minNight, maxNight, maxGuest, breakfastPrice } = useSelector((state) => state.settings);

  const handleChange = (name, value) => {
    dispatch(updateSetting({ name, value: Number(value) }));
    toast.success('Settings updated successfully');

  };



  return (
    <div className="main-settings">
      <div className="settings-container">
        <h2>Update hotel settings</h2>
        <div>
          <div className="settings-inputs">
            <p>Minimum nights/booking</p>
            <input
              type="text"
              value={minNight}
              onChange={(e) => handleChange('minNight', e.target.value)}
            />
          </div>
          <div className="settings-inputs">
            <p>Maximum nights/booking</p>
            <input
              type="text"
              value={maxNight}
              onChange={(e) => handleChange('maxNight', e.target.value)}
            />
          </div>
          <div className="settings-inputs">
            <p>Maximum guests/booking</p>
            <input
              type="text"
              value={maxGuest}
              onChange={(e) => handleChange('maxGuest', e.target.value)}
            />
          </div>
          <div className="settings-inputs">
            <p>Breakfast price</p>
            <input
              type="text"
              value={breakfastPrice}
              onChange={(e) => handleChange('breakfastPrice', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
