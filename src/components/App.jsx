import { BrowserRouter , Routes ,Route } from "react-router-dom";
import "../css/mediaQueries.css"
import Home from "./Home.jsx";
import StudentPage from "./StudentPage.jsx";



function App() {

  return (

    <BrowserRouter>
      <h1>hello</h1>
      <Routes>

        <Route path="/students-crud-system/" element={<Home/>}/>

        <Route path="/students-crud-system/:studentId" element={<StudentPage/>}/>


      </Routes>
    
    </BrowserRouter>


  )  
}

export default App;
