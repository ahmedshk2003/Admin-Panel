import { createSlice } from "@reduxjs/toolkit";

const Inventory= createSlice({
    name:"InventoryItems",
    initialState:[],
    reducers:{
        addinventory(state, actions){
         state.push(actions.payload)
        },
        
    }
})


export default Inventory.reducer
export const {addinventory} = Inventory.actions