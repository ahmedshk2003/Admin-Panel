import React from 'react';
import "./Style.css"

const Radio = ({name, value, LabelName, className1="radio-label", className2=".checkmark" }) => {

//     <label class="radio-label">
//     <input type="radio" name="gender" value="male">
//     <span class="checkmark"></span>
//     Male
//     </label>

    return (
        <label className={className1}>
            <input type="radio" name={name} value={value} />
            <span className={className2}></span>
            {LabelName}
        </label>
    )
}


export default Radio
