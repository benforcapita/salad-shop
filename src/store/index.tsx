import { createStore, Store, } from 'redux';
import CartReducer from "../reducers";
import { StoreType } from "../Types";

const initialState: StoreType =
{
    open: false,
    Items: [],
    amount: 0
}


const store: Store = createStore(CartReducer, initialState,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
export default store;