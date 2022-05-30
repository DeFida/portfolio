
import './App.css';
import Header from '../Header/Header'
import Greeting from '../Greeting/Greeting'
import Informations from '../Informations/Informations'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

import Post from '../../posts/Post/Post'

import { Route, Switch} from 'react-router-dom';
import { useState } from 'react';

function App() {

  let [currentContent, setCurrentContent] = useState("/");

  const posts = {
    "movie-explorer": {
      title: "Movie Explorer",
      content: [
        {type: "image", src: require("../../Images/movieexplorer.svg").default}, 
        {type: "text", text: "This post is dedicated to the graduation project from Yandex Practicum. I developed a service called 'Movie Explorer' at the end of a web development course from Yandex Practicum in 2021. The system is designed using React for the frontend and NodeJs for the backend."}, 
        {type: "image", src: require("../../Images/movieexplorer2.svg").default}, 
        {type: "text", text: "Movie Explorer is a service where you can find movies on demand and save them in your personal account."},
        {type: "link", link: "https://www.figma.com/file/cASM20ikAsPlTi2doec68Q/Diploma", text: "Link for design"},
      ]
    },

    "qhat": {
      title: "QHat Messenger",
      content: [
        {type: "image", src: require("../../Images/qhat.svg").default}, 
        {type: "text", text: "This post is dedicated to the messenger called 'QHat'. The chat application is designed using React for the interface and Node Js for the backend. Socket IO is used for bi-directional communication between client and server. Bi-directional communications are enabled when a client has Socket.IO in the browser, and a server has also integrated the Socket.IO package. "}, 
        {type: "image", src: require("../../Images/qhatblack.svg").default}, 
        {type: "text", text: "MongoDB was used because it is a tool that can manage document-oriented information as well as store or retrieve information."},
        {type: "image", src: require("../../Images/qhatblack2.svg").default},
        {type: "link", link: "https://www.figma.com/file/aXJESlQQOkHURksddzFWsg/Qhat?node-id=0%3A1", text: "Link for design"},
      ]
    }
  }

  function changeTheContent(content) {
    setCurrentContent(content);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });

  }

  return (
    <div className="app">

      {currentContent === "/" ?
        <>
          <Header cont={currentContent} changeTheContent={changeTheContent}/>
          <Greeting />
          <Informations />

          <Projects changeTheContent={changeTheContent} />
          <Footer />
        </>
      :
        <Post post={posts[currentContent]} cont={currentContent} changeTheContent={changeTheContent} />
      }
          


          

    </div>
  );
}

export default App;
