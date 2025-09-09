import Styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";


const Post = ({ post }) => {

  const {deletePost} = useContext(PostList);

  return (
    <div
      className={`card ${Styles.postCard}`}
      style={{ width: "18rem" }}
    >
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}>
            <MdDelete  />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className={`badge text-bg-primary ${Styles.hashtag}`}>
            {tag}
          </span>
        ))}
        <div className={`alert alert-success ${Styles.reactions}`} role="alert">
          <FcLike /> {post.reactions}
        </div>
      </div>
    </div>
  );
};

export default Post;
