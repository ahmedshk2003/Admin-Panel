import React from 'react'

export const Email = (props) => {
  return (
    <>
      <div className='loginDiv'>
      <h1 className='loginTxt'>Enter Your Email</h1>
      <input type='text' placeholder='Email' className='loginInput' onChange={props.change} value={props.value} ></input>
      <button onClick={props.click} className='submitBtn'>Submit</button>
    </div >
    </>
  )
}