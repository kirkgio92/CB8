import styles from "./index.module.scss";
import { useEffect, useState } from "react";

const ToDoItem = ({ listData }) => {
  const { userId, todo, completed } = listData;
  const [userData, setUserData] = useState([]);
  const [onChangeCheckbox, setOnChangeCheckbox] = useState(completed);

  const { firstName, lastName, image } = userData;

  const handleChangeCheck = () => {
    setOnChangeCheckbox((prevCompleted) => !prevCompleted);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div
      className={`${styles.todoItem} ${
        onChangeCheckbox && styles.todoCompleted
      }`}
    >
      <div className={styles.userWrapper}>
        <img className={styles.userImg} src={image} alt={image} />
        <h2>{firstName + " " + lastName}</h2>
      </div>
      <div className={styles.todoWrapper}>
        <p className={styles.text}>{todo}</p>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={onChangeCheckbox}
          onChange={handleChangeCheck}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
