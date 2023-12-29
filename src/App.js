import React, { useState } from "react";
import "./App.css";
import Layout from './Layout';
import { Email } from "./login/Email";
import { Password } from "./login/Password";
import { Otp } from "./login/Otp";
import { json } from "react-router-dom";

export const App = () => {
  const [authStep, setAuthStep] = useState('email');
  const [newData, setNewData] = useState({
    email: '',
    password: '',
    otp: '',

  })


  const data = {

    email: 'saad',
    password: 'saad',
    otp: '1234'

  }

  const handleValidation = (e, key) => {
    setNewData(
      {
        ...newData,
        [key]: e.target.value
      }
    )

  }


  const handleEmail = () => {


    if (data.email === newData.email) {
      setAuthStep('password');
    }
  }




  const handlePassword = () => {
    if (data.password === newData.password)
      setAuthStep('otp');
  }

  const handleOtp = () => {
    if (data.otp == newData.otp) {

      console.log(newData)
      setAuthStep('layout')
      localStorage.setItem("loggedin", JSON.stringify({ email: newData.email, password: newData.password, OTP: newData.otp }))
    }

  }

  function handleRender() {
    if (authStep === 'email') {
      return (
        <Email click={handleEmail}
          change={(e) => handleValidation(e, "email")}
          value={newData.email}
        />
      )
    }
    else if (authStep === 'password') {
      return (
        <Password click={handlePassword}
          change={(e) => handleValidation(e, "password")}
          value={newData.password} />
      )
    } else if (authStep === 'otp') {
      return <Otp
        click={handleOtp}
        change={(e) => handleValidation(e, "otp")}
        value={newData.otp} />

    }
    else if (authStep === 'layout') {
      return <Layout />
    } else {
      return null
    }
  }


  return (
    <>
      {
        handleRender()
      }
    </>
  );
}

