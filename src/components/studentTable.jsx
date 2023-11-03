import { useEffect, useState } from "react";

import "../css/studentTable.css";
import TableDetails from "./tableDetails";
import { useDispatch } from "react-redux";
import { updateStudent } from "../stores/GlobalStore/actions/StudentsActions"

function StudentTable({ student }) {


  const [tableData,setTableData] = useState(student.tableData)

  // imp line

  useEffect(()=>{

    setTableData(student.tableData)

  },[student])


  const dispatch = useDispatch()


  let lectures = Array(4).fill(0).map(ele => student.days.split(" ,")).flat()
  
  
  
  let months = student.months.split(" ,")
  
  let lecturesNumber = lectures.length 
  let monthsNumber = months.length
  
  function saveTableChanges(e) {
    
    const form = new FormData(e.target);
    const entries = Object.fromEntries([...form.entries()]);
    let obj = {};

    e.preventDefault();

    for (let i = 1; i <= lecturesNumber; i++) {
      for (let j = 1; j <= monthsNumber; j++) {
        obj[`${i}-${j}`] = "off";
      }
    }

    student.tableData = { ...obj, ...entries };

    dispatch(updateStudent(student))
  }


  function valueChanger(order) {
    setTableData((prevState) => {
      return {
        ...prevState,
        ...{ [order]: prevState[order] == "on" ? "off" : "on" },
      };
    });
  }


  return (
    <form className="table-container" onSubmit={saveTableChanges}>
      <div className="table-holder">
        <div className="table">
          <div className="table-head">
            <div className="table-row">
          
              <span style={{ width: "100px" }}>months</span>

              {

                months.map((month) => (
                      <span key={month}>{month}</span>
                    )
                  )
              
              }
          
            </div>
          </div>

          <div className="table-body">
            {
            Array(lecturesNumber)
              .fill(0)
              .map((_, index) => {
                
                return (
              
                    <div className="table-row" key={"row-"+ index}>
                      
                      {
                        Array(monthsNumber + 1).fill(0).map((_,idx) => {
                        
                            let order = `${index+1}-${idx}`
                            let orderValue = tableData[order]
                            
                            
                            let lectureEle = (
                            
                                <span className="lectureEle" key={order} style={{width:"100px"}}>
                                  lecture {index + 1}
                                  <i>{lectures[index]}</i>
                                </span>
                            
                            )    
                              
                              
                            let checkBoxEle = (
                        
                              <span key={order}>
                                {
                                  <input type="checkbox" onChange={()=>valueChanger(order)} checked={orderValue == "on"} name={order}/> 
                                }
                              </span>
                          
                            )
                            
                            return idx == 0 ? lectureEle : checkBoxEle
                          }
                        )
                      }
                    
                    </div>
                  )
                }
              )
            }

          </div>
        </div>
      </div>
      
      <TableDetails
        student={student}
        tableData={tableData}
      />

      <button className="btn" type="submit">
        save table changes
      </button>
    </form>
  );
}
export default StudentTable;
