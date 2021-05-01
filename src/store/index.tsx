import { createStore, Store, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import CartReducer from "../reducers";
import { StoreType } from "../Types";

const initialState: StoreType =
{
    open: false,
    Items:[]
}


const store: Store = createStore(CartReducer, initialState,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
export default store;