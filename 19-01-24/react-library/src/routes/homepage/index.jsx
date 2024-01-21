import { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

export default function Homepage() {
  const [lists, setLists] = useState([]);
  const [inputText, setInputText] = useState("");
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setInputText(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    navigate(`/book/${inputText}`);
  };

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  return (
    <div className={styles.Homepage}>
      <button>
        <Link to={"/copyright"}>Go to @Copyright </Link>
      </button>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={onInputChange}
          placeholder="Looking for a book?"
        />
      </form>

      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </div>
  );
}
