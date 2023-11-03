import { useEffect, useRef } from "react";
import { useGlobalContextFunc } from "../contexts/globalContext";
import "../css/menu.css";
import { clearStudents } from "../stores/GlobalStore/actions/StudentsActions"
import { useDispatch } from "react-redux";

function Menu() {

  const {
    showMenu,
    setShowMenu
  } = useGlobalContextFunc();

  const dispatch = useDispatch()

  const menu = useRef(null);

  useEffect(() => {
    showMenu ? showMenuFunc() : hideMenuFunc();
  }, [showMenu]);


  const showMenuFunc = () => {
    menu.current.classList.add("active");

    setTimeout(() => {
      const menuItemsEle = [...menu.current.children[0].children];
      menuItemsEle.forEach((li) => li.classList.add("show"));
    }, 1500);
  };


  const hideMenuFunc = () => {
    setTimeout(() => menu.current.classList.remove("active"), 500);

    const menuItemsEle = [...menu.current.children[0].children];
    menuItemsEle.forEach((li) => li.classList.remove("show"));
  };


  return (
    <div ref={menu} className="menu">
      <ul>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100093002576066&mibextid=LQQJ4d">
            contact to developer
          </a>
        </li>

        <li>premium edition is on the way</li>
        <li onClick={()=> {
          dispatch(clearStudents())
          setShowMenu(!showMenu)
        }}>
          remove all data
        </li>
      </ul>
    </div>
  );
}
export default Menu;
