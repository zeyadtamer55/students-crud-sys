import { Link } from "react-router-dom";
import { useGlobalContextFunc } from "../contexts/globalContext";
import StudentDefaultMode from "./studentDefaultMode";
import "../css/student.css"

const Students = () => {
  const { showedStudents } = useGlobalContextFunc();

  return (
    <>
      <h3 className="your-students">your students</h3>

      <div className="studentsContainer">
        {
        
          showedStudents.length > 0 ?
          
          (
            showedStudents.map((student) => {
              
                return (
                  <Link className="student" to={`/${student.id}`} key={student.id}>
                    <StudentDefaultMode student={student}/>
                  </Link>
                );
            
              }
            )
          )
          
          :
        
          <p>no students to show</p>
          
        }
      </div>
    </>
  );
};
export default Students;
