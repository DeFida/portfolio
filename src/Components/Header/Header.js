
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

      <div className='languages'>
        <p onClick={() => props.switchLan("en")} className={props.lng === "en" ? 'languages__ln languages__ln_selected' : 'languages__ln'}>en</p>
        <p onClick={() => props.switchLan("ru")} className={props.lng === "ru" ? 'languages__ln languages__ln_selected' : 'languages__ln'}>ru</p>
        <p onClick={() => props.switchLan("kz")} className={props.lng === "kz" ? 'languages__ln languages__ln_selected' : 'languages__ln'}>kz</p>
      </div>
      
      <a href="https://read.cv/defida" target="_blank" className="header__cv">cv <img src={require("../../Images/arrow.svg").default} alt="" className="arrow" /></a>
    </div>
  );
}

export default Header;
