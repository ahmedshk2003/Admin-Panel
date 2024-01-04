import { createSlice } from "@reduxjs/toolkit";

const isLoggedin= createSlice({
    name:"Logedin",
    initialState:{loged:0},
    reducers:{
        signin (state){
        return state.loged=1
        },

        signout(state){
        return state.loged=0 
        }
        
    }
})


export default isLoggedin.reducer
export const {signin, signout} = isLoggedin.actions