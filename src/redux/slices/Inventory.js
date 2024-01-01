import { createSlice } from "@reduxjs/toolkit";

const Inventory= createSlice({
    name:"InventoryItems",
    initialState:[],
    reducers:{
        addinventory(state, actions){
         state.push(actions.payload)
        },
        DeleteInventory(state, actions){
            return state.splice(actions.payload, 1);
        }
    }
})


export default Inventory.reducer
export const {addinventory,  DeleteInventory} = Inventory.actions