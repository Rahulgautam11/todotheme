import { createStore } from "redux";
import { RootReducers } from './Reducers'
export const Store = createStore(RootReducers, window.__REDUX__DEVTOOLS__EXTENSION__ && window.REDUX__DEVTOOLS__EXTENSION())