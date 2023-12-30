import React from 'react';
import "./Style.css"

const Input= ({ 
    type, 
    placeholder, 
    value, 
    required, 
    disabled, 
    Change, 
    ...props
}) => {

    return (
         <input 
          className="Global-input"
          onChange={Change}
          type={type}
          placeholder={placeholder}
          value={value}
          required
         />
    )
}


export default Input
