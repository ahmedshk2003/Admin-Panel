import React from 'react';
import "./Style.css"

const Select = ({value, className="Global-select",onChange }) => {

    return (
        <select className={className} value={value} onChange={onChange} />
      
    )
}

const Option =({className2="Global-option" ,key, optionValue, children}) =>{
    return(
        <option className={className2} key={key} value={optionValue} >
          {children}
        </option>
    )
}

export {Select, Option}
