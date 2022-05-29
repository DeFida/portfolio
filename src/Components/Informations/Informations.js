
import './Informations.css';

function Informations() {
  return (
    <div className="informations">
      <div className="informations__wrapper">
        <div className="information">
          <h3 className="information__h3">network</h3>

          <p className="information__p">tynyshtyqdastan@gmail.com</p>
          <a target="_blank" className="information__p" href="https://www.instagram.com/de_fida_">Instagram <img src={require("../../Images/arrow.svg").default} className="arrow" alt="" /></a>
          <a target="_blank" className="information__p" href="https://t.me/dastan_tynyshtyk">Telegram <img src={require("../../Images/arrow.svg").default} className="arrow" alt="" /></a>
          <a target="_blank" className="information__p" href="https://vk.com/defida">VK <img src={require("../../Images/arrow.svg").default} className="arrow" alt="" /></a>
          <a target="_blank" className="information__p" href="https://www.linkedin.com/in/dastan-tynyshtyk-4b069822b/">LinkedIn <img src={require("../../Images/arrow.svg").default} className="arrow" alt="" /></a>
        </div>
        <div className="information information__left">
          <h3 className="information__h3">skills & focus</h3>

          <p className="information__p">ReactJS + NodeJS</p>
          <p className="information__p">MongoDB</p>
          <p className="information__p">Photoshop</p>
          <p className="information__p">Premiere Pro</p>
          <p className="information__p">Landing</p>
          
        </div>
      </div>
      <div className="informations__wrapper">
        <div className="information">
          <h3 className="information__h3">client expreience</h3>

          <p className="information__p">Turing</p>
          <p className="information__p">Freelance</p>
        </div>
        <div className="information information__left">
          <h3 className="information__h3">certificates & diplomas</h3>

          <p className="information__p information__p_r">Yandex.Practicum, Web <br /> development</p>
          <p className="information__p">Yandex Lyceum 2020</p>
          <p className="information__p">IELTS 7.0</p>
          <p className="information__p">WRO 2019, Hungary</p>
          <p className="information__p">NIS - NU</p>
          
        </div>
      </div>
    </div>
  );
}

export default Informations;
