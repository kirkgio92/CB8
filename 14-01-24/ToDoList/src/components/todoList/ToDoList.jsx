import styles from "./index.module.scss";
import ToDoItem from "../todoItem/ToDoItem";

const ToDoList = ({ listData }) => {
  return (
    <div className={styles.todoList}>
      {listData
        .slice()
        .reverse()
        .map((data) => (
          <ToDoItem listData={data} key={data.id} />
        ))}
    </div>
  );
};

export default ToDoList;
