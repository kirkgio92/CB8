import { useEffect } from "react";
import { useState } from "react";
import AddPost from "./components/addPost/AddPost";
import PostList from "./components/postList/PostList";
import NavBar from "./components/navBar";
import "./App.css";

function App() {
  const [postListData, setPostListData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPostListData(data.posts));
  }, []);

  return (
    <div className="App">
      <NavBar />
      <AddPost setPostListData={setPostListData} />
      <PostList postListData={postListData} />
    </div>
  );
}

export default App;
