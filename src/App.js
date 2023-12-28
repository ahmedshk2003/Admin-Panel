import React, { useState } from "react";
import "./App.css";
import Layout from './Layout';
import { Email } from "./login/Email";
import { Password } from "./login/Password";
import { Otp } from "./login/Otp";

export const App = () => {
  const [authStep, setAuthStep] = useState('email');
  const [newData, setNewData] = useState({
    email: '',
    password: '',
    otp: ''

  })

  const data = {

    email: 'ahmedshaikh',
    password: 'ahmedshaikh',
    otp: '1234'

  }

  const handleValidation = (e, key) => {
    setNewData(
      {
        [key]: e.target.value
      }
    )
  
  }


  const handleEmail = () => {

    const email = data.email
    const password = data.password
    const otp = data.otp

    if (data.email === newData.email) {

      setAuthStep('password');

    }
  }




const handlePassword = () => {
  if (data.password === newData.password)
    setAuthStep('otp');
}

const handleOtp = () => {
  if (data.otp === newData.otp)
    localStorage.setItem('Logged In', 1)
  setAuthStep('layout')
}




return (
  <>
    {authStep === 'email' ?
      <Email click={handleEmail}
        change={(e) => handleValidation(e, "email")}
        value={newData.email}
      />
      : authStep === 'password' ?
        <Password click={handlePassword}
          change={(e) => handleValidation(e, "password")}
          value={newData.password} />
        : authStep === 'otp' ?
          <Otp
            click={handleOtp}
            change={(e) => handleValidation(e, "otp")}
            value={newData.otp} />
          : authStep === 'layout' ?
            <Layout /> : null}
  </>
);
}

