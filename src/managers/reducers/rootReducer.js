import {combineReducers} from "redux";
import fetchReducer from "./fetchData";

const rootReducer = combineReducers({
    fetchReducer: fetchReducer

})

export default rootReducer