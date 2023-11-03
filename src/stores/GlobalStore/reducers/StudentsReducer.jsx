import { ADD_STUDENT , REMOVE_STUDENT , UPDATE_STUDENT , SET_STUDENTS , CLEAR_STUDENTS } from "../actions/StudentsActions"

const state = localStorage.getItem("state")
const students = state ? [...JSON.parse(state).studentsData] : []


const StudentsReducer = ( state = students, { type , payload }) => {
  
  if ( type === SET_STUDENTS ) {

    return [...payload]

  }
  else if ( type === ADD_STUDENT ) {

    return [ ...state , payload ]

  }
  else if ( type === REMOVE_STUDENT ) {

    return [ ...state.filter(student => payload.id !== student.id) ]

  }
  else if ( type === UPDATE_STUDENT ) {

    return [ ...state.filter(student => payload.id !== student.id) , payload]

  }
  else if ( type === CLEAR_STUDENTS ) {

    return []

  }
  else {
  
    return [ ...state ]
  
  }

}
export default StudentsReducer