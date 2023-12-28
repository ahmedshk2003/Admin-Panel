import React from 'react'
import { TextField } from '@mui/material'

const InputNumber = () => {


    return (

        <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}


const InputText = () => {
    return(

        <TextField id="outlined-search" label="Search field" type="search" />
    )

}



export { InputNumber, InputText }
