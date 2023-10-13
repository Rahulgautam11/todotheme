import { combineReducers } from "redux";
import { SwitchThemeReducer } from './SwitchThemeReducer'
import { AddToReducer } from './TodoReducer'
export const RootReducers = combineReducers({
    SwitchThemeReducer,
    AddToReducer,
})