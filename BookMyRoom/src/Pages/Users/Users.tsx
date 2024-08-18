import { useState } from 'react';
import { toast } from 'react-toastify';
import { supabase } from '../../supabase/supabaseClient';
import Input from '../../UX/Input';
import Button from '../../UX/Button';
import InputWrapper from '../../UX/InputWrapper';
import Label from '../../UX/Label';
import ComponentWrapper from '../../UX/ComponentWrapper';

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

  const cleanInputs = () => {
    setUserData({
        fullName: '',
        email: '',
        password: '',
        repeatPassword: '',
    })
  }
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
      <ComponentWrapper type={'componentWrapper'}>
        <h2>Create New User</h2>
        <div>
          {inputFields.map((field, index) => (
            <InputWrapper key={index}>
            <Label>{field.labelText}</Label>
            <Input
              key={index}
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              inputClassName="user-input"
            />
             </InputWrapper>
          ))}
          <div className="button-group">
            <Button type={'danger'} onClick={cleanInputs}>Cancel</Button>
            <Button type={'success'} onClick={handleUsersData}>Create new user</Button>
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default Users;
