
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <hr className="hr" />
      <h3 className='projects__h3'>Projects</h3>

      <a href="movie-explorer" className='project'>
        <img src={require('../../Images/movieexplorer.svg').default} className="project__img" alt="movieexplorer" />
        <p className='project__name'>Movie-explorer 2021, Yandex Practicum <img src={require("../../Images/arrow.svg").default} className="arrow" alt="" /></p>
      </a>

      <a href="./qhat" className='project'>
        <img src={require('../../Images/qhat.svg').default} className="project__img" alt="qhat" />
        <p className='project__name'>QHat 2021, Messenger <img src={require("../../Images/arrow.svg").default} className="arrow" alt="" /></p>
      </a>
    </div>
  );
}

export default Projects;
