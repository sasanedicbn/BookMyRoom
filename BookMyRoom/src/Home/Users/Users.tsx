
const Users = () => {
  return (
    <div className="main-settings">
      <div className="settings-container">
        <h2>Create New User</h2>
        <div>
          <div className="settings-inputs">
            <p>Full name</p>
            <input
              type="text"
              name="fullName"
              className="user-input"
            />
          </div>
          <div className="settings-inputs">
            <p>Email address</p>
            <input
              type="email"
              name="email"
              className="user-input"
            />
          </div>
          <div className="settings-inputs">
            <p>Password (min 8 characters)</p>
            <input
              type="password"
              name="password"
              className="user-input"
            />
          </div>
          <div className="settings-inputs">
            <p>Repeat password</p>
            <input
              type="password"
              name="repeatPassword"
              className="user-input"
            />
          </div>
          <div className="button-group">
            <button className='btn-cancel'>Cancel</button>
            <button className='btn-create-user'>Create new user</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
