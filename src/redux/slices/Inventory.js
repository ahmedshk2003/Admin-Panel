import { createSlice } from "@reduxjs/toolkit";

const Inventory= createSlice({
    name:"InventoryItems",
    initialState:[],
    reducers:{
        addinventory(state, actions){
         state.push(actions.payload)
        },
        DeleteInventory(state, action){
            return state.filter((item, index) => index !== action.payload);
        }
    }
})


export default Inventory.reducer
export const {addinventory,  DeleteInventory} = Inventory.actions