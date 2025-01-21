import "./myButton.css"
function MyButton(text, func) {
  return (
   <button onClick={func} className="myButton">{text}Click Me!</button>
  )
}

export default MyButton;
