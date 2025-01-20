import "./App.css";
import Lesson01 from "./lessons/lesson01/Lesson01";
import Homework01 from "./homeworks/homework01/Homework01";
import Lesson02 from "./lessons/lesson02/Lesson02";
import Homework02 from "./homeworks/homework02/Homework02";
import ProfileCard from "./components/ProfileCard";
import Lesson03 from "./lessons/lesson03/lesson03";

//Объявление функции из компонента. Компонент называется с большой буквы
//и имеет расширение jsx
function App() {
  //Тело функции
  //Здесь происходит логика работы с данными, запросы к серверу, работа с изменяемыми элементами

  return (
    <>
      {/* <Lesson01/> */}
      {/* <Homework01/> */}
      {/* <Lesson02/> */}
      <Lesson03/>
      {/* <ProfileCard /> */}
    </>
  );
}

export default App;
