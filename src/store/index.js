import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cashReducer } from "./CashReducer";
import { customerReducer } from "./CustomerReducer";

export const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));