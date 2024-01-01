import React from 'react'
import './Style.css'

export const Checkbox = ({ name, Labelname, className1 = "checkbox-container", className2 = "checkmark" }) => {




    return (
        <>
            <label className={className1}>
                {Labelname}
                <input type="checkbox" name={name} />
                <span className={className2}></span>
            </label>
        </>

    )
}
