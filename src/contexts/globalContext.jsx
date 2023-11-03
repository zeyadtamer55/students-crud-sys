import { createContext, useContext , useState ,useEffect } from "react";
import { useSelector } from "react-redux";


const Context = createContext()


export const useGlobalContextFunc = () => useContext(Context)



function GlobalContext  ({children})  {
  
  const state = useSelector(state => state)

  const students = state.studentsData
  const [showedStudents,setShowedStudents] = useState([...students])
  const [renderMainForm,setRenderMainForm] = useState(true)
  const [showMenu,setShowMenu] = useState(false)


  useEffect(()=>{

    localStorage.setItem('state',JSON.stringify(state))
  
    setShowedStudents(prevState => [...state.studentsData])
  

  },[state])


  const contextValues = {
    renderMainForm,
    setRenderMainForm,
    showMenu,
    setShowMenu,
    showedStudents,
    setShowedStudents,
    students
  }


  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  )
}
export default GlobalContext