import { useState } from "react";
import tableDataSetter from "../hooks/tableDataSetter";
import { useDispatch } from "react-redux";

import { updateStudent } from "../stores/GlobalStore/actions/StudentsActions"

function StudentEditMode({ setIsEdit, isEdit, student }) {
  
  const [studentData, setStudentData] = useState(student);

  const inputs = Object.keys(student).filter(
    (input) =>
      input != "tableData" &&
      !input.includes("-day") &&
      !input.includes("-month") 
  );

  const dispatch = useDispatch()


  const updateStudentFunc = (e) => {
    
    e.preventDefault();
  
    const form = new FormData(e.target);
    const entries = Object.fromEntries([...form.entries()]);
  
    let tableData = student.tableData

    const monthsNum = entries.months.split(" ,").length
    const daysNum = entries.days.split(" ,").length * 4


    if (entries.months != student.months || entries.days != student.days) {

      tableData = tableDataSetter(monthsNum,daysNum)

    }
  
    const updatedStudent = { ...student, ...entries, tableData }


    dispatch(updateStudent(updatedStudent))
    setIsEdit(!isEdit);

  };


  const changeInputValue = (e) => {

    setStudentData((prevState)=>{
        return {...prevState,...{[e.target.name]:e.target.value}}
      }
    )
  }



  const editInputsJsx = inputs.map((input, index) => {
    if (input != "id")
      return (
        <div key={index}>
          <p>{input.split("-").join(" ")}</p>:
          <input
            type={input.match(/(number|price)/) ? "number" : "text"}
            name={input}
            value={studentData[input]}
            onChange={changeInputValue}
          />
        </div>
      );
  })


  return (
    <>
      <form onSubmit={updateStudentFunc}>
        <p>student controls</p>
    
        <i className="warning">if you changed any data of the table all the data of table will be cleared</i>

        {
          editInputsJsx
        }

        <button type="submit" className="btn black">
          save changes
        </button>
      </form>
    </>
  );
}
export default StudentEditMode;
