import PostElement from "../postElement/PostElement";
import "./index.css";

const PostList = ({ postListData }) => {
  return (
    <div className="PostList">
      {postListData.map((post) => (
        <PostElement postData={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
