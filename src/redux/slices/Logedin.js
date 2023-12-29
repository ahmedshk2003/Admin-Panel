import { createSlice } from "@reduxjs/toolkit";

const isLoggedin= createSlice({
    name:"Logedin",
    initialState:!!localStorage.getItem("loggedin"),
    reducers:{
        logged (state, actions){
        
        },
        
    }
})


export default isLoggedin.reducer
export const {logged} = isLoggedin.actions