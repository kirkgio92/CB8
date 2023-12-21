import { useState } from "react";
import "./index.css";

const AddPost = ({ setPostListData }) => {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const randomUserId = Math.floor(Math.random() * 100) + 1;

  const onHandleSubmit = (e) => {
    e.preventDefault();

    setPostListData((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: inputValue,
        body: textAreaValue,
        userId: randomUserId,
        tags: ["coding", "bootcamp"],
        reactions: 999,
      },
    ]);
  };

  const onHandleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onHandleTextAreaValue = (e) => {
    setTextAreaValue(e.target.value);
  };

  const onHandleClear = () => {
    setInputValue("");
    setTextAreaValue("");
  };

  return (
    <form className="AddPost" onSubmit={onHandleSubmit}>
      <input
        type="text"
        placeholder="Post Title"
        value={inputValue}
        onChange={onHandleInputValue}
      />
      <textarea
        rows="5"
        placeholder="Type here your awesome post"
        value={textAreaValue}
        onChange={onHandleTextAreaValue}
      ></textarea>
      <div className="AddPost__btns">
        <input type="submit" value="Add New Post" />
        <button type="button" onClick={onHandleClear}>
          Clean
        </button>
      </div>
    </form>
  );
};

export default AddPost;
