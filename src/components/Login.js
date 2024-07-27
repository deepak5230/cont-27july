import React, { useState } from 'react';

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: 123,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        onLoginSuccess(data);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;







/*import React from 'react'
import {useState, useEffect} from 'react'

function Login() {
    const[email, setEmail]= useState("");
    const[password, setPassword]=useState("");

    const setemail= (e)=>{
        setEmail(e.target.value)
    }
    const setpassword= (e)=>{
        setPassword(e.target.value)
    }
    useEffect(()=>{

    })
    const login= async()=>{

        console.warn("email,password")
        let item={email,password};
       let result= fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'emilys',
          password: 'emilyspass',
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      .then(res => res.json())
      .then(console.log);
      

        
    }


  return (
    <div className="signup">
        <p>Welcome back!</p>
        <h1>Sign in to your account</h1>
        <p>Your email</p>
        <input type="text" className="email" onChange={setemail}></input>
        <p>Password</p>
        <input type="password" className="password" onChange={setpassword}></input>

        <button onClick={login}className="btn-btn">Continue</button>
        
        
      
    </div>
  )
}

export default Login*/
