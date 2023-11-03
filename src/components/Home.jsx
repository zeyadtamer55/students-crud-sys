import IconMenu from "./IconMobileMenu";
import Introduction from "./Introduction";
import Students from "./Students";
import Footer from "./footer";
import MainForm from "./mainForm";
import Menu from "./menu";
import SearchForm from "./searchForm";
import { useGlobalContextFunc } from "../contexts/globalContext";


const Home = () => {
  
  const { renderMainForm } = useGlobalContextFunc()

  return (
    
    <>
      
      <div className="container">
    
        <Introduction />
        
        {renderMainForm ? <MainForm /> : <SearchForm />}
      
      
        <Students />
      
      
        <Footer />
      </div>

      <Menu />
      <IconMenu />
    </>
  );
}
export default Home