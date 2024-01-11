import "./App.scss";
import { useState, useEffect } from "react";
import ToDoForm from "./components/todoForm/ToDoForm";
import ToDoList from "./components/todoList/ToDoList";

function App() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((data) => setListData(data.todos));
  }, []);

  return (
    <div>
      <ToDoForm setListData={setListData} />
      <ToDoList listData={(listData)} />
    </div>
  );
}

export default App;
