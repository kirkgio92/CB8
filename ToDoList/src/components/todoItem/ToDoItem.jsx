import "./index.scss";
import { useEffect, useState } from "react";

const ToDoItem = ({ listData, setListData }) => {
  const { id, userId, todo, completed } = listData;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const { firstName, lastName, image } = userData;

  return (
    <div className="todoItem">
      <div className="todoItem--userWrapper">
        <img className="todoItem--userImg" src={image} alt={image} />
        <h2>{firstName + " " + lastName}</h2>
      </div>
      <div className="todoItem--todoWrapper">
        <p className="todoItem--text">{todo}</p>
        <input
          className="todoItem--checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
