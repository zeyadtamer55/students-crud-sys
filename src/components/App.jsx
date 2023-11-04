import { BrowserRouter , Routes ,Route } from "react-router-dom";
import "../css/mediaQueries.css"
import Home from "./Home.jsx";
import StudentPage from "./StudentPage.jsx";



function App() {

  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/:studentId" element={<StudentPage/>}/>


      </Routes>
    
    </BrowserRouter>


  )  
}

export default App;
