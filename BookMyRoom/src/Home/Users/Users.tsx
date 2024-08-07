import { useState } from 'react';
import { toast } from 'react-toastify';
import { supabase } from '../../superbase/superbaseClient';

const Users = () => {
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleUsersData = async () => {
    if (userData.password !== userData.repeatPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const { email, password, fullName } = userData;

    try {
      const {  error } = await supabase.auth.signUp({
        email,
        password,
      });
      const { error: profileError } = await supabase
        .from('Profiles')
        .insert([{  fullName ,email, password }]);

      if(error && profileError){
        console.log('error',error, profileError)
      }
      
      toast.success("User created successfully");

    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(error.message);
    }
  };

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
              value={userData.fullName}
              onChange={handleChange}
              className="user-input"
            />
          </div>
          <div className="settings-inputs">
            <p>Email address</p>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="user-input"
            />
          </div>
          <div className="settings-inputs">
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              className="user-input"
            />
          </div>
          <div className="settings-inputs">
            <p>Repeat password</p>
            <input
              type="password"
              name="repeatPassword"
              value={userData.repeatPassword}
              onChange={handleChange}
              className="user-input"
            />
          </div>
          <div className="button-group">
            <button className='btn-cancel'>Cancel</button>
            <button className='btn-create-user' onClick={handleUsersData}>Create new user</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
