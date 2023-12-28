import React from 'react'

export const Otp = (props) => {
  return (
    <>
      <div className='loginDiv'>
        <h1 className='loginTxt'>Enter OTP</h1>
        <input type='text' placeholder='OTP' className='loginInput' onChange={props.change} value={props.value}></input>
        <button onClick={props.click} className='submitBtn'>Submit</button>
      </div>
    </>
  )
}
