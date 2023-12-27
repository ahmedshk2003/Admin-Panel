import { configureStore } from "@reduxjs/toolkit";
import Inventory from "./slices/Inventory";
const Store = configureStore({
  reducer: {
    INVENTORY_ITEMS: Inventory
  },
});

export default Store;