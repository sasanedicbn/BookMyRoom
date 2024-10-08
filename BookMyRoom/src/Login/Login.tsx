import { useState } from 'react';
import { toast } from 'react-toastify';
import Logo from '../assets/Logo';
import { supabase } from '../supabase/supabaseClient';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from '../store/roomsSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');


  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('All fields are required');
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;

      if (!user) throw new Error('User not found');

      const { data: profile, error: profileError } = await supabase
        .from('Profiles')
        .select('fullName')
        .single();

      if (profileError) throw profileError;

      dispatch(getUser(profile.fullName));
      toast.success(`Logged in successfully. Welcome ${profile.fullName}`);
      navigate('/rooms');
    } catch (error: any) {
      console.error('Error logging in:', error);
      toast.error(error?.message);
    }
  };


  return (
    <div className="login-container">
      <div className="login-form">
        <Logo />
        <h2>Login to your account</h2>
        <div className="login-inputs">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="login-inputs">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button className="btn-login" onClick={handleLogin}>Log in</button>
      </div>
    </div>
  );
};

export default Login;
