import styles from "./index.module.scss";
import { useState } from "react";

const ToDoForm = ({ setListData }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const NewTodo = {
      id: Math.floor(Math.random() * 999999),
      completed: false,
      todo: text,
      userId: Math.floor(Math.random() * 100),
    };
    setListData((prev) => [...prev, NewTodo]);
    setText("");
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <h1 className={styles.MainTitle}>What's on the list today?</h1>
      <div className={styles.formWrapper}>
        <input
          type="text"
          placeholder="What is the task?"
          onChange={handleChange}
          value={text}
          className={styles.input}
        />
        <input type="submit" value="Add To Do" className={styles.btn} />
      </div>
    </form>
  );
};

export default ToDoForm;
