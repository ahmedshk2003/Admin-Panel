import React from 'react';
import "./Style.css"

const Button = ({className="Global-button", onclick, button}) => {

    return (
        <button className={className} onClick={onclick}>{button}</button>
    )
}

export default Button
