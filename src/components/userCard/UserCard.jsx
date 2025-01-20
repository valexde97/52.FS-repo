/* eslint-disable react/prop-types */
import "./userCard.css";

function UserCard(props) {
  return (
    <div className="userCard">
      <h4>Name: {props.name}</h4>
      <p>Age: {props.age}</p>
      {/* Если пропс хобби тру, то часть  выражения после двойного апперсанта будет показана */}
      {/* {props.hobby && (<p>Hobby:{props.hobby}</p>)} */}
    {props.hobby ? (<p>Hobby: {props.hobby}</p>):(<p>No hobby </p>)}
    </div>
  );
}
export default UserCard;
