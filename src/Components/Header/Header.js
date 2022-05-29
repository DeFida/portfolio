
import './Header.css';
import { useLocation } from 'react-router-dom'

function Header() {
  let location = useLocation();
  let path = location.pathname;

  console.log(path);
  return (
    <div className="header">
      {path === "/portfolio/" ? 
        <p className="header__logo">D</p>
      :
        <a href='/' className="header__logo"><img src={require("../../Images/arrowleft.svg").default} alt="" /></a>
      }

      
      <a href="https://read.cv/defida" target="_blank" className="header__cv">cv <img src={require("../../Images/arrow.svg").default} alt="" className="arrow" /></a>
    </div>
  );
}

export default Header;
