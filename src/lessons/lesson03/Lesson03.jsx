import MyButton from "../../components/MyButton";
import UserCard from "../../components/userCard/UserCard";
import Button from "../../homeworks/homework04/Button";

function Lesson03() {
  function profilePicture(){
    const image = "https://img-webcalypt.ru/uploads/admin/images/meme-templates/b4kHFk8Pz3I7OfhMUY1RtuGFvwxOFTMt.jpg"
    return(<img src={image} alt="some-img"></img>)
  }

  function someFunctionOne(name) {
    let count = 0;

    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times`);
    } else {
      console.log(`${name} stop clicking me🥺!`);
    }
  }

    return (
      <div>
        {/* <h2>React Props👨‍👩‍👧‍👦</h2>
        <UserCard name={"Peter"} age={35} hobby={"Hiking"} />
        <UserCard name={"Rosa"} age={40} hobby={"Diving"} />
        <UserCard name={"Anton"} age={28} /> */}



        <Button text="Click me!" func={profilePicture} type="button"/>
        <Button text="Push me!" func={() => someFunctionOne("Bro")} type="submit"/>

        
      </div>
    );
  }


export default Lesson03;
