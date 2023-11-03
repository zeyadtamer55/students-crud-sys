import { useState } from "react";
import StudentDefaultMode from "./studentDefaultMode";
import StudentEditMode from "./studentEditMode";
import StudentTable from "./studentTable";
import "../css/student.css"
import { useDispatch } from "react-redux";
import { removeStudent } from "../stores/GlobalStore/actions/StudentsActions"


function Student({ student, index }) {
  
  const [isEdit, setIsEdit] = useState(false);



  const inputs = Object.keys(student).filter(
    (input) =>
      input != "tableData" &&
      !input.includes("-day") &&
      !input.includes("-month") 
  );


  const dispatch = useDispatch()

  return (
    
    <div className="student">
      <span className="order">student {index + 1}</span>

      <div className="studentDataHolder">
        {
          // name attribute value must be unique bec they re used in key prop
          isEdit ? (
            <StudentEditMode
              setIsEdit={setIsEdit}
              isEdit={isEdit}
              student={student}
            />
          ) : (
            <StudentDefaultMode inputs={inputs} student={student} />
          )
        }
      </div>

      { !isEdit && <StudentTable student={student}/> }
    
      <div className="btns-holder">
      
        {
        
          !isEdit && (
            <button className="btn" onClick={() => setIsEdit(!isEdit)}>
              edit student
            </button>
          )
        
        }
      
        <button className="btn" onClick={() => dispatch(removeStudent(student))}>
          remove student
        </button>
    
      </div>
      
    </div>

);
}
export default Student;
