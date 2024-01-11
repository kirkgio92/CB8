import "./index.scss";
import ToDoItem from "../todoItem/ToDoItem";

const ToDoList = ({ listData }) => {
  return (
    <div className="todoList">
      {listData.map((data) => (
        <ToDoItem listData={data} key={data.id} />
      ))}
    </div>
  );
};

export default ToDoList;
