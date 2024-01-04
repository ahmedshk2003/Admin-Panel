import { configureStore } from "@reduxjs/toolkit";
import Inventory from "./slices/Inventory";
import isLoggedin from "./slices/Logedin"
const Store = configureStore({
  reducer: {
    INVENTORY_ITEMS: Inventory,
    Loggedin_ITEMS: isLoggedin
  },
});

export default Store;