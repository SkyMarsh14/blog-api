import useFetch from "../hooks/useFetch";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import { User } from "lucide-react";
import UserContext from "../helper/UserContext";
import formatDate from "../helper/formatDate";
import { Link } from "react-router-dom";
const Home = () => {
  const { data, error, loading } = useFetch("posts");
  return (
    <main>
      <div className={styles.main_container}>
        <h1>Publish your passion, your way</h1>
        <p>Create a unique and beautiful blog easily.</p>
        <LoginDiv />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        data && (
          <div className={styles.post_container}>
            {data.posts.map((post) => {
              return (
                <div className={styles.post_card} key={crypto.randomUUID()}>
                  <div className={styles.post_title}>{post.title}</div>
                  <div className={styles.post_content}>{post.content}</div>
                  <Link to={`/posts/${post.id}`} className={styles.post_link}>
                    Read More
                  </Link>
                  <div className={styles.post_info}>
                    <div className={styles.post_user}>
                      <User />
                      {post.author.username}
                    </div>

                    <div>{formatDate(post.createdAt)}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      )}
      {error && console.log(error)}
    </main>
  );
};

const LoginDiv = () => {
  const [auth, setAuth] = useContext(UserContext);
  return (
    <div>
      <p>Join our community to create and view other's creation.</p>
      <div className={styles.links_div}>
        {!auth && (
          <>
            <a className={`${styles.link} ${styles.link_light}`} href="/login">
              Log in
            </a>
            <a className={`${styles.link} ${styles.link_dark}`} href="/sign-up">
              Sign up
            </a>
          </>
        )}
        {auth && (
          <>
            <a
              className={`${styles.link} ${styles.link_light}`}
              href="/create-post"
            >
              Create Post
            </a>
            <a className={`${styles.link} ${styles.link_dark}`} href="/posts">
              My Posts
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
