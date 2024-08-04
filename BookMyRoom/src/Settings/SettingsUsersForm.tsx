
const SettingsUsersForm = ({ settingsData, handleChange, handleUpdate }) => {
  return (
    <div className="main-settings">
      <div className="settings-container">
        <h2>Update hotel settings</h2>
        <div>
          {Object.keys(settingsData).map((key) => (
            <div className="settings-inputs" key={key}>
              <p>{key}</p>
              <input
                type="text"
                name={key}
                value={settingsData[key]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button className="btn-update-settings" onClick={handleUpdate}>
            Update changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsUsersForm;
