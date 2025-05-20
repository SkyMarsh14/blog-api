import useFetch from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/PostDetails.module.css";
import formatDate from "../helper/formatDate";
import { useState } from "react";
import blog_api from "../helper/blog_api";
import sendForm from "../helper/sendForm";
import { User } from "lucide-react";
const PostDetails = () => {
  const { postId } = useParams();
  const { data, error, loading, needsAuth } = useFetch(`posts/${postId}`);
  return (
    <div className="main_container">
      {data && (
        <>
          <main>
            <div className={styles.post_container}>
              <div className={styles.post_title}>{data.post.title}</div>
              <div className={styles.post_content}>{data.post.content}</div>
              <div className={styles.post_createdAt}>
                {formatDate(data.post.createdAt)}
              </div>
            </div>
          </main>
          <CommentInput needsAuth={needsAuth} postId={postId} />
          <Comments comments={data.post.Comment} />
        </>
      )}
    </div>
  );
};

const CommentInput = ({ needsAuth, postId }) => {
  const navigate = useNavigate();
  const [focused, setFocused] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const url = blog_api + `posts/${postId}/comments`;
    try {
      const data = await sendForm(e.currentTarget, url, navigate);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  }
  if (focused) {
    return (
      <form className={styles.input_container} onSubmit={handleSubmit}>
        <textarea
          name="content"
          id="comment"
          className={styles.textarea}
          autoFocus
        ></textarea>
        <div className={styles.button_container}>
          <button
            className={styles.cancel}
            onClick={() => setFocused(false)}
            type="button"
          >
            Cancel
          </button>
          <button className={styles.submit} type="submit">
            Comment
          </button>
        </div>
      </form>
    );
  }
  return (
    <div className={styles.input_container}>
      {needsAuth ? (
        <input
          type="text"
          placeholder="Login to join this conversation."
          disabled={true}
        />
      ) : (
        <input
          type="text"
          placeholder="Join the conversation."
          onFocus={() => setFocused(true)}
        />
      )}
    </div>
  );
};
const Comments = ({ comments }) => {
  return (
    <div className={styles.comments_container}>
      {comments.map((comment) => (
        <div className={styles.comment}>
          <div className={styles.user}>
            <User />
            <span>{comment.author.username}</span>
          </div>
          <div className={styles.content}>{comment.content}</div>
          <div className={styles.created}>{formatDate(comment.createdAt)}</div>
        </div>
      ))}
    </div>
  );
};

export default PostDetails;
