import "./index.scss";
import { useState } from "react";

const ToDoForm = ({ setListData }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setListData((prev) => [
      {
        id: prev.length + 1,
        completed: Math.random() > 0.5,
        todo: text,
        userId: Math.floor(Math.random() * 100),
      },
      ...prev,
    ]);
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <h1 className="todoForm--MainTitle">What's on the list today?</h1>
      <div className="todoForm--formWrapper">
        <input
          type="text"
          placeholder="What is the task?"
          onChange={handleChange}
          value={text}
          className="todoForm--input"
        />
        <button type="submit" className="todoForm--btn">
          Add to the list
        </button>
      </div>
    </form>
  );
};

export default ToDoForm;
