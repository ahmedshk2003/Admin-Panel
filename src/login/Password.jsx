import React from 'react'

export const Password = (props) => {
    return (
        <>
            <div className='loginDiv'>
                
                <h1 className='loginTxt'>Enter Your Password</h1>
                <input type='password' placeholder='Password' className='loginInput' onChange={props.change} value={props.value}></input>
                <button onClick={props.click} className='submitBtn'>Submit</button>

            </div>

        </>
    )
}
