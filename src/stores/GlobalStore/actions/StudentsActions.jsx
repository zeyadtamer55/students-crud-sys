export const ADD_STUDENT = "ADD_STUDENT"
export const REMOVE_STUDENT = "REMOVE_STUDENT"
export const UPDATE_STUDENT = "UPDATE_STUDENT"
export const SET_STUDENTS = "SET_STUDENTS"
export const CLEAR_STUDENTS = "CLEAR_STUDENTS"



export const addStudent = (student) => {

  return {
    type:ADD_STUDENT,
    payload:student
  }

}

export const removeStudent = (student) => {

  return {
    type:REMOVE_STUDENT,
    payload:student
  }

}

export const updateStudent = (student) => {

  return {
    type:UPDATE_STUDENT,
    payload:student
  }

}

export const setStudents = (students) => {

  return {
    type:SET_STUDENTS,
    payload:students
  }

}

export const clearStudents = () => {

  return {
    type:CLEAR_STUDENTS
  }

}