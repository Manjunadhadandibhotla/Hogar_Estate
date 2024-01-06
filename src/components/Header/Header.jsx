import React ,{useState} from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";


import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
   const [menuOpened, setMenuOpened] = useState(false);
   const getMenuStyles = (menuOpened) =>{
    if(document.documentElement.clientWidth <=800){
      return {right:!menuOpened && "-100%"};
    }
   };
  return (
    <section className="h-wrapper">
      <div className=" flexCenter paddings innerWidth h-container">
        <img className="logo1" src="./logo1.png" alt="logo" width={200} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        ></OutsideClickHandler>
        <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <a href="" className="h-menu-1">
            Residencies
          </a>
          <a href="" className="h-menu-2">
            Our Values
          </a>
          <a href="" className="h-menu-3">
            Contact Us
          </a>
          <a href="" className="h-menu-4">
            Get Started
          </a>
          <button className="button">
            <a href="mailto:manjunadhadandibhotla@gmail.com">Contact</a>
          </button>
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
