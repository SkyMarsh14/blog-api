import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import styles from "../styles/PostDetails.module.css";
import formatDate from "../helper/formatDate";
const PostDetails = () => {
  const { postId } = useParams();
  const { data, error, loading, needsAuth } = useFetch(`posts/${postId}`);
  return (
    <div className="main_container">
      <main>
        {data && (
          <>
            <div className={styles.post_container}>
              <div className={styles.post_title}>{data.post.title}</div>
              <div className={styles.post_content}>{data.post.content}</div>
              <div className={styles.post_createdAt}>
                {formatDate(data.post.createdAt)}
              </div>
            </div>
          </>
        )}
        <CommentInput needsAuth={needsAuth} />
      </main>
    </div>
  );
};

const CommentInput = ({ needsAuth }) => {
  if (needsAuth) {
    return (
      <div className={styles.input}>
        <input type="text" placeholder="Login to join this conversation." />
        <a href="/login">Login</a>
      </div>
    );
  }
  return (
    <div className={styles.input}>
      <input type="text" placeholder="Join the conversation." />
    </div>
  );
};
export default PostDetails;
