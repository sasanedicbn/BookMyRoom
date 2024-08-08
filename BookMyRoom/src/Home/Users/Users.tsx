import { useState } from 'react';
import { toast } from 'react-toastify';
import { supabase } from '../../superbase/superbaseClient';
import Input from './Input';

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
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      const { error: profileError } = await supabase
        .from('Profiles')
        .insert([{ fullName, email, password }]);

      if (error || profileError) {
        console.log('error', error, profileError);
        toast.error("Error creating user");
      } else {
        toast.success("User created successfully");
      }

    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(error.message);
    }
  };

  const inputFields = [
    { labelText: 'Full name', name: 'fullName', value: userData.fullName, type: 'text' },
    { labelText: 'Email address', name: 'email', value: userData.email, type: 'email' },
    { labelText: 'Password', name: 'password', value: userData.password, type: 'password' },
    { labelText: 'Repeat password', name: 'repeatPassword', value: userData.repeatPassword, type: 'password' },
  ];

  return (
    <div className="main-settings">
      <div className="settings-container">
        <h2>Create New User</h2>
        <div>
          {inputFields.map((field, index) => (
            <Input
              key={index}
              className="settings-inputs"
              labelText={field.labelText}
              text={field.type}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              inputClassName="user-input"
            />
          ))}
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
