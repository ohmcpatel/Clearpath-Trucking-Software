// Signup.js
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import "./Signup.css"; // Import your CSS file
import logo from "../images/logo.svg";
import { Link } from 'react-router-dom';

export default function Signup() {
  // Define state variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define a function to handle form submission
  const handleSignup = async () => {
    // Initialize Supabase client with your Supabase URL and API key
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
      // Replace with your signup logic using Supabase
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error('Signup error:', error.message);
        // Handle signup error (e.g., show an error message)
      } else {
        console.log('Signed up as:', user);
        // Redirect or perform other actions after successful signup
      }
    } catch (error) {
      console.error('Signup error:', error.message);
      // Handle unexpected errors
    }
  };

  return (
    <div className="signup-container">
      <div className='logo__img_sign'>
        <img className="logo__image-icon" alt="Logo" src={logo} />
      </div>
      <div className='signup__input'>
        <div className='signup__email'>
          <p className="signup__title">Email</p>
          <input
            className='signup__input-value'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='signup__password'>
          <p className="signup__title">Password</p>
          <input
            className='signup__input-value'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button className="signup__btn" onClick={handleSignup}>Sign Up</button>
      <div className="signup__login-link">
        <Link to="/">Login</Link>
      </div>
    </div>
  );
}
