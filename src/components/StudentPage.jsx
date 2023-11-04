import { useState } from "react";
import StudentDefaultMode from "./studentDefaultMode";
import StudentEditMode from "./studentEditMode";
import StudentTable from "./studentTable";
import "../css/studentPage.css"
import { useSelector } from "react-redux";
import { useParams ,Link } from "react-router-dom";
import RemoveStudentPopUp from "./RemoveStudentPopUp";
import "../css/popUp.css"

function StudentPage() {
  
  const { studentId } = useParams()
  const students = useSelector(state => state.studentsData)
  const student = students.filter(student => student.id ===  studentId)[0]

  const [isEdit, setIsEdit] = useState(false);
  const [showPop,setShowPop] = useState(false)


  



  return (
  
    <>

      { 
        showPop &&
         
         <RemoveStudentPopUp
           showPop={showPop}
           setShowPop={setShowPop}
           student={student}
         />
      }

      <Link className="back" to="/">back</Link>
      
      <div className="studentPage">
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
              <StudentDefaultMode student={student} />
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
        
          <button className="btn" onClick={() => setShowPop(!showPop)}>
            remove student
          </button>
      
        </div>
        
      </div>
    </>
  
  );
}
export default StudentPage;
