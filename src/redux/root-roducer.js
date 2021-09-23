// compine all reducers in one place 
//reducer is a function with two parameters 
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
// we will get localstorage  as my default storage NOT SESSION STORAGE

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// define persist config object¨
const persistConfig = {
    // here we are saying that take the storage from the root to all elements
    // add storage object to it and in WHITELIST take the reducers that we will 
    //  to save data to storage and in our case user is handeled by FIREBASE so we add CART
    key:'root',
    storage,
    whitelist:['cart']
}

const rootRoducer = combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory: directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootRoducer);
