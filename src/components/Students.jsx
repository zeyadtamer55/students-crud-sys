import { useGlobalContextFunc } from "../contexts/globalContext";
import Student from "./student";

const Students = () => {
  const { showedStudents } = useGlobalContextFunc();

  return (
    <>
      <h3 className="your-students">your students</h3>

      <div className="studentsContainer">
        {
        
          showedStudents.length > 0 ?
          
          (
            showedStudents.map((student, index) => {
              
                return <Student key={student.id} student={student} index={index} />;
            
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
