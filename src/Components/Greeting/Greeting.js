
import './Greeting.css';

function Greeting(props) {
  return (
    <div className="greeting">
      <h1 className="greeting__h1">{props.local.greeting1[props.lng]} <span className="color__AB7CA1">{props.local.myname[props.lng]}</span></h1>
      <h2 className="greeting__h2">{props.local.ima[props.lng]} <span className="color__AB7CA1">{props.local.webdev[props.lng]}</span> {props.local.uralsk[props.lng]}</h2>
      <h2 className="greeting__h2">{props.local.kazakhstan[props.lng]}</h2>
      <p className="greeting__p">ReactJS + NodeJS ✌️</p>
    </div>
  );
}

export default Greeting;
