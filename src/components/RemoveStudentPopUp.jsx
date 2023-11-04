import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { removeStudent } from "../stores/GlobalStore/actions/StudentsActions"

const RemoveStudentPopUp = ({studentName,setShowPop,showPop,student}) => {
  
  const dispatch = useDispatch()

  return (

    <>

      <i className="mask"></i>

      <div className="popUP">
        
        <p>are you sure about deleting student {`"${student["student-name"]}"`}</p>

        <div className="btn-holder">
        
          <button className="btn no" onClick={() => setShowPop(!showPop)}>no</button>
          
          <Link
            to="/"
            className="btn yes"
            onClick={() => {
                dispatch(removeStudent(student))
                setShowPop(!showPop)
              }
            }
          >
            yes
          </Link>
      
        </div>

      </div>

    </>
  )
}
export default RemoveStudentPopUp