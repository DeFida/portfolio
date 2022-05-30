
import { Link } from 'react-router-dom';
import './Post.css';

import { useLocation } from 'react-router-dom'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function Post({post, changeTheContent, cont}) {
  

  return (
    <div className="post">
      <Header cont={cont} changeTheContent={changeTheContent}/>
      <h1 className='post__title'>{post.title}</h1>

      {Array.from(post.content).map((e) => {
        if (e.type === "text") {
          return <p className='post__text'>{e.text}</p>
        }
        else if (e.type === "image") {
          return <img src={e.src} className="post__image" alt="" />
        }
        else if (e.type === "link") {
          return <a href={e.link} target="_blank" className='post__link'>{e.text} <img src={require("../../Images/arrow.svg").default} className="arrow" alt="" /> </a>
        }
      })}
    <Footer></Footer>

    </div>
  );
}

export default Post;
