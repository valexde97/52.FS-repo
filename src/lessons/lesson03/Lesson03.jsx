import UserCard from "../../components/userCard/UserCard";

function Lesson03() {
  return (
    <div>
      <h2>React Props👨‍👩‍👧‍👦</h2>
      <UserCard name={"Peter"} age={35} hobby={"Hiking"} />
      <UserCard name={"Rosa"} age={40} hobby={"Diving"} />
      <UserCard name={"Anton"} age={28} />
    </div>
  );
}

export default Lesson03;
