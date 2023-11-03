import { legacy_createStore , combineReducers } from "redux";
import StudentsReducer from "./reducers/StudentsReducer";


const appReducer = combineReducers({
  studentsData:StudentsReducer,
})


const StudentsStore = legacy_createStore(appReducer)

export default StudentsStore