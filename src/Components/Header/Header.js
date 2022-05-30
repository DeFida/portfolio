
import './Header.css';
import { useLocation } from 'react-router-dom'

function Header(props) {
  return (
    <div className="header">
      {props.cont === "/" ? 
        <p className="header__logo">D</p>
      :
        <p style={{cursor: "pointer"}} onClick={() => {props.changeTheContent("/")}} className="header__logo"><img src={require("../../Images/arrowleft.svg").default} alt="" /></p>
      }

      
      <a href="https://read.cv/defida" target="_blank" className="header__cv">cv <img src={require("../../Images/arrow.svg").default} alt="" className="arrow" /></a>
    </div>
  );
}

export default Header;
