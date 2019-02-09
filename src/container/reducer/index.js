import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"
import weatherAppReducer from "./weatherAppReducer"

export default combineReducers({ weatherAppReducer, form: formReducer })