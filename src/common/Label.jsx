import React from 'react';
import "./Style.css"

const Label = ({label,className="Global-Label",element, onclick}) => {

    return (
        <div className={className} onClick={onclick}>
           <h4>{label} :</h4>
           <div>{element}</div>
        </div>
    )
}

export default Label