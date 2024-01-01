import React from 'react';
import "./Style.css"

const Textarea = ({className="Global-textarea",value,maxLength ,placeholder ,name, id, cols, row, onchange, required }) => {

    return (
        <textarea className={className}  maxLength={maxLength} placeholder={placeholder} value={value} name={name} id={id} cols={cols} rows={row} onChange={onchange} required={required}>

        </textarea>
    )
}

export default Textarea
