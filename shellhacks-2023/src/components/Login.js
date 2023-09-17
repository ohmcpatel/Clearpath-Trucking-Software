// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { createClient } from '@supabase/supabase-js'; // Import Supabase client
// import "./Login.css";
// import logo from "../images/logo.svg" 

// export default function Login() {
//   // Define state variables for username and password
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // Define a function to handle form submission
//   const handleLogin = async () => {
//     // Initialize Supabase client with your Supabase URL and API key
//     const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
//     const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
//     const supabase = createClient(supabaseUrl, supabaseKey);

//     // Perform authentication logic here (e.g., login with Supabase)
//     try {
//       // Replace with your authentication logic using Supabase
//       const { user, error } = await supabase.auth.signIn({
//         email: username, // Assuming you're using email for authentication
//         password: password,
//       });

//       if (error) {
//         console.error('Login error:', error.message);
//         // Handle login error (e.g., show an error message)
//       } else {
//         // User logged in successfully
//         console.log('Logged in as:', user);
//         // Redirect or perform other actions after successful login
//       }
//     } catch (error) {
//       console.error('Login error:', error.message);
//       // Handle unexpected errors
//     }
//   };

//   return (
//     <div>
//       <div className='logo__img'> <img className="logo__image-icon" alt="Logo" src={logo} /></div>
//      <div className='login__input'>
//       <div className='login__username'>
//       <p className="login__title">UserName</p>
//       <input className='login__input-value'
//         type="text"
//         placeholder="Elon Musk"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       </div>
//       <div className='login__password'>
//       <p className="login__title">Password</p>
//       <input className='login__input-value'
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       </div>
//       </div>

//       <button className="log__btn" onClick={handleLogin}>Login</button>
//       <div className="login__privacy-link"><Link to="/sign-up">Sign Up</Link></div>
   
//     </div>
//   );
// }

// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import "./Login.css"; // Import your CSS file
import logo from "../images/logo.svg";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate()
  // Define state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define a function to handle form submission
  const handleLogin = async () => {
    // Initialize Supabase client with your Supabase URL and API key
    const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
    const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    try {
      // Replace with your authentication logic using Supabase
      
        const { data, error } = await supabase.auth.signInWithPassword({
            email: username,
            password: password,
        }); 

      console.log(data)

      if (error) {
        console.error('Login error:', error.message);
        // Handle login error (e.g., show an error message)
      } else {
        // User logged in successfully
        console.log('Logged in as:', data);
        navigate("/home")

        // Redirect or perform other actions after successful login
      }
    } catch (error) {
      console.error('Login error:', error.message);
      // Handle unexpected errors
    }
  };

  return (
    <div className="login-container">
      <div className='logo__img'>
        <img className="logo__image-icon" alt="Logo" src={logo} />
      </div>
      <div className='login__input'>
        <div className='login__username'>
          <p className="login__title">Username</p>
          <input
            className='login__input-value'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='login__password'>
          <p className="login__title">Password</p>
          <input
            className='login__input-value'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <button className="log__btn" onClick={handleLogin}>Log In</button>
      <div className="login__privacy-link">
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
