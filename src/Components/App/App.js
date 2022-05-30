
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

  let [lng, setLng] = useState("en");

  function switchLan(lng) {
    setLng(lng);
  }

  let local = {
    "greeting1": {"en": "Hi, my name is", "ru": "Привет, меня зовут", "kz": "Сәлем, менің есімім -"},
    "myname": {"en": "Tynyshtyk Dastan", "ru": "Тыныштык Дастан", "kz": "Тыныштық Дастан"},
    "ima": {"en": "I'm a", "ru": "Я", "kz": "Мен"},
    "webdev": {"en": "web developer", "ru": "веб-разработчик", "kz": "веб программистпын,"},
    "uralsk": {"en": "from Uralsk,", "ru": "из Уральска,", "kz": "Орал, "},
    "kazakhstan": {"en": "Kazakhstan.", "ru": "Казахстан.", "kz": "Қазақстан"},

    
    "kazakhstan": {"en": "Kazakhstan.", "ru": "Казахстан.", "kz": "Қазақстан"},
    "kazakhstan": {"en": "Kazakhstan.", "ru": "Казахстан.", "kz": "Қазақстан"},
    "kazakhstan": {"en": "Kazakhstan.", "ru": "Казахстан.", "kz": "Қазақстан"},
    "kazakhstan": {"en": "Kazakhstan.", "ru": "Казахстан.", "kz": "Қазақстан"},
    "kazakhstan": {"en": "Kazakhstan.", "ru": "Казахстан.", "kz": "Қазақстан"},
  }

  const posts = {
    "movie-explorer": {
      title: "Movie Explorer",
      content: [
        {type: "image", src: require("../../Images/movieexplorer.svg").default}, 
        {type: "text", text: {"en": "This post is dedicated to the graduation project from Yandex Practicum. I developed a service called 'Movie Explorer' at the end of a web development course from Yandex Practicum in 2021. The system is designed using React for the frontend and NodeJs for the backend.", "ru": "Этот пост посвящен дипломному проекту из Yandex Practicum. Я разработал сервис под названием 'Movie Explorer' в конце курса веб-разработки от Yandex Practicum в 2021 году. Система разработана с использованием React для интерфейса и NodeJS для бэкэнда.", "kz": "Бұл пост Yandex Practicum дипломдық жобасына арналған. Мен 2021 жылы Yandex Practicum веб-дамыту курсының соңында 'Movie Explorer' деп аталатын қызметті жасадым. Жүйе интерфейс үшін React және артқы жағындағы NodeJS көмегімен жасалған."},}, 
        {type: "image", src: require("../../Images/movieexplorer2.svg").default}, 
        {type: "text", text: {"en": "Movie Explorer is a service where you can find movies on demand and save them in your personal account.", "ru": "Movie Explorer - это сервис, с помощью которого вы можете находить фильмы по запросу и сохранять их в своем личном кабинете.", "kz": "Movie Explorer-бұл фильмдерді сұраныс бойынша табуға және оларды жеке кабинетте сақтауға болатын сайт."}},
        {type: "link", link: "https://www.figma.com/file/cASM20ikAsPlTi2doec68Q/Diploma", text: {"en": "Link to the design", "kz": "Дизайнға сілтеме", "ru": "Ссылка на дизайн"}},
      ]
    },

    "qhat": {
      title: "QHat Messenger",
      content: [
        {type: "image", src: require("../../Images/qhat.svg").default}, 
        {type: "text", text: {"en": "This post is dedicated to the messenger called 'QHat'. The chat application is designed using React for the interface and Node Js for the backend. Socket IO is used for bi-directional communication between client and server. Bi-directional communications are enabled when a client has Socket.IO in the browser, and a server has also integrated the Socket.IO package.", "ru": "Этот пост посвящен мессенджеру под названием 'QHat'. Приложение для чата разработано с использованием React для интерфейса и Node Js для бэкэнда. Сокет ввода-вывода используется для двунаправленной связи между клиентом и сервером. Двунаправленная связь включена, когда у клиента есть сокет.Ввод-вывод в браузере, и сервер также интегрировал сокет.Пакет ввода-вывода.", "kz": "Бұл хабарлама 'QHat' деп аталатын мессенджерге арналған. Чат қосымшасы интерфейс үшін React және артқы жағындағы Node Js көмегімен жасалған. Сокет енгізу-шығару үшін қолданылады двунаправленной байланыс клиент пен сервер арасында. Клиенттің розеткасы болған кезде қос бағытты байланыс қосылады.Браузерде енгізу-шығару және сервер Розетканы да біріктірді.Енгізу-шығару пакеті."}}, 
        {type: "image", src: require("../../Images/qhatblack.svg").default}, 
        {type: "text", text: {"en": "MongoDB was used because it is a tool that can manage document-oriented information as well as store or retrieve information.", "ru": "MongoDB был использован, потому что это инструмент, который может управлять информацией, ориентированной на документы, а также хранить или извлекать информацию.", "kz": "MongoDB қолданылды, өйткені бұл құжатқа бағытталған ақпаратты басқаруға, сондай-ақ ақпаратты сақтауға немесе алуға болатын құрал."}},
        {type: "image", src: require("../../Images/qhatblack2.svg").default},
        {type: "link", link: "https://www.figma.com/file/aXJESlQQOkHURksddzFWsg/Qhat?node-id=0%3A1", text: {"en": "Link to the design", "kz": "Дизайнға сілтеме", "ru": "Ссылка на дизайн"}},
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
          <Header lng={lng} switchLan={switchLan} cont={currentContent} changeTheContent={changeTheContent}/>
          <Greeting local={local} lng={lng} />
          <Informations />

          <Projects changeTheContent={changeTheContent} />
          <Footer />
        </>
      :
        <Post lng={lng} post={posts[currentContent]} switchLan={switchLan} cont={currentContent} changeTheContent={changeTheContent} />
      }
          


          

    </div>
  );
}

export default App;
