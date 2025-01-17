import './App.css'
import Lesson01 from './lessons/lesson01/Lesson01';
import Homework01 from './homeworks/Homework01';
import Lesson02 from './lessons/lesson02/Lesson02';
//Объявление функции из компонента. Компонент называется с большой буквы 
//и имеет расширение jsx
function App(){
  //Тело функции 
  //Здесь происходит логика работы с данными, запросы к серверу, работа с изменяемыми элементами
 
  return (
    <>
    {/* <Lesson01/> */}
    {/* <Homework01/> */}
    <Lesson02/>
    </>
  );
}

export default App
