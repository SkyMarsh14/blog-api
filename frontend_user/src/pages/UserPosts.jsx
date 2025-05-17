import { Plus } from "lucide-react";
import styles from "../styles/UserPosts.module.css";
import useFetch from "../hooks/useFetch";
import { Eye, SquarePen, Trash2, Calendar } from "lucide-react";
import SessionModal from "../components/SessionModal";
const UserPosts = () => {
  const { data, error, loading, needsAuth } = useFetch("user/posts");
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.post_header}>
          <div>My Posts</div>
          <a href="/create-post">
            <Plus />
            <div>Create New Post</div>
          </a>
        </div>
        <main className={styles.post_container}>
          {loading && <div>Loading...</div>}
          {data && data.posts.length === 0 && (
            <>
              <p>You have no posts yet.</p>
              <p>
                Write your first post from <a href="create-post">here!</a>
              </p>
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
                  <div className={styles.post_date}>
                    <Calendar />
                    <div>{formatDate(post.createdAt)}</div>
                  </div>
                </div>
                <nav className={styles.post_right}>
                  <button
                    className={`${styles.post_button} ${styles.post_button_view}`}
                  >
                    <Eye />
                    <div>View</div>
                  </button>
                  <button className={styles.post_button}>
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
            ))}
        </main>
      </div>
      <SessionModal auth={needsAuth} />
    </>
  );
};
function formatDate(date) {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default UserPosts;
