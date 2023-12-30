import React, { useState , useEffect } from "react";
import Layout from './Layout';
import { Email } from "./login/Email";
import { Password } from "./login/Password";
import { Otp } from "./login/Otp";
import './App.css'

const App = () => {
  const [authStep, setAuthStep] = useState('email');
  const [newData, setNewData] = useState({
    email: '',
    password: '',
    otp: '',

  });

  const [error, setError] = useState('')

  useEffect(() => {
    
    const isLoggedIn = localStorage.getItem('LoggedIn' , '1') 
    if (isLoggedIn) {
      setAuthStep('layout');
    }
  }, []);


  const data = {

    email: 'Ahmed',
    password: 'Ahmed',
    otp: '1234'
  };

  const handleValidation = (e, key) => {
    setNewData(
      {
        ...newData,
        [key]: e.target.value
      }
    )
    setError('')
  }






  const handleEmail = () => {
    if (data.email === newData.email.trim()) {
      setAuthStep('password');
    } else {
      setError('Invalid email. Please enter the correct email.');
    }

  };

  const handlePassword = () => {
    if (data.password === newData.password) {
      setAuthStep('otp');
    }
    else {
      setError('Invalid password. Please enter the correct password.');
    }
  };

  const handleOtp = () => {
    if (data.otp === newData.otp) {
      localStorage.setItem('LoggedIn', '1');
      setAuthStep('layout');
    } else {
      setError('Invalid OTP. Please enter the correct OTP.');
    }
  };


  return (
    <>


      {authStep === 'email' ?
        <Email
          click={handleEmail}
          change={(e) => handleValidation(e, "email")}
          value={newData.email}
          error={error}
        />
        : authStep === 'password' ?
          <Password
            click={handlePassword}
            change={(e) => handleValidation(e, "password")}
            value={newData.password}
            error={error}
          />
          : authStep === 'otp' ?
            <Otp
              click={handleOtp}
              change={(e) => handleValidation(e, "otp")}
              value={newData.otp}
              error={error}


            />


            : authStep === 'layout' ?
              <Layout />
              : null}

    </>
  );
};

export default App;
