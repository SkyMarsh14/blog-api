import { Plus } from "lucide-react";
import blogWriterImg from "../public/book-writer.svg";
import styles from "../styles/UserPosts.module.css";
import useFetch from "../hooks/useFetch";
import { Eye, SquarePen, Trash2, Calendar } from "lucide-react";
import SessionModal from "../components/SessionModal";
import { useNavigate } from "react-router-dom";
import formatDate from "../helper/formatDate";
const UserPosts = () => {
  const { data, error, loading, needsAuth } = useFetch("user/posts");
  const navigate = useNavigate();
  function handleClick(e, path, postId) {
    e.preventDefault();
    navigate(`/${path}/${postId}`);
  }
  return (
    <>
      <div className="main_container">
        <main className={styles.post_container}>
          <div className={styles.post_header}>
            <div>My Posts</div>
            <a href="/create-post" className={styles.link_create_post}>
              <Plus />
              <div>Create New Post</div>
            </a>
          </div>
          {loading && <div>Loading...</div>}
          {data && data.posts.length === 0 && (
            <>
              <p>You have no posts yet.</p>
              <p>
                Write your first post from <a href="create-post">here!</a>
              </p>
              <img
                src={blogWriterImg}
                alt="A man writing a blog."
                className={styles.img}
              />
            </>
          )}
          {data &&
            data.posts.map((post) => (
              <div className={styles.post_card} key={post.id}>
                <div className={styles.post_left}>
                  <div className={styles.post_title}>{post.title}</div>
                  <div>
                    {post.published
                      ? "This post is published."
                      : "This post is not visible to other users."}
                  </div>
                  <div className={styles.nav_buttons}>
                    <div className={styles.post_date}>
                      <Calendar />
                      <div>{formatDate(post.createdAt)}</div>
                    </div>
                    <nav className={styles.post_right}>
                      <button
                        onClick={(e) => {
                          handleClick(e, "posts", post.id);
                        }}
                        className={`${styles.post_button} ${styles.post_button_view}`}
                      >
                        <Eye />
                        <div>View</div>
                      </button>
                      <button
                        className={styles.post_button}
                        onClick={(e) => {
                          handleClick(e, "edit-post", post.id);
                        }}
                      >
                        <SquarePen />
                        <div>Edit</div>
                      </button>
                      <button
                        className={`${styles.post_button} ${styles.post_button_delete}`}
                      >
                        <Trash2 />
                        <div>Delete</div>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            ))}
        </main>
      </div>
      <SessionModal auth={needsAuth} />
    </>
  );
};

export default UserPosts;
