import { BrowserRouter , Routes ,Route } from "react-router-dom";
import "../css/mediaQueries.css"
import Home from "./Home.jsx";
import StudentPage from "./StudentPage.jsx";



function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path="/students-crud-sys/" element={<Home/>}/>

        <Route path="/students-crud-sys/:studentId" element={<StudentPage/>}/>


      </Routes>
    
    </BrowserRouter>


  )  
}

export default App;
