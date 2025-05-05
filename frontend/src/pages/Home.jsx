import useFetch from "../hooks/useFetch";
import styles from "../styles/Home.module.css";
import { useContext } from "react";
import UserContext from "../helper/UserContext";
const Home = () => {
  const { data, error, loading } = useFetch("posts");
  return (
    <main>
      <div>
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
                <div key={crypto.randomUUID()}>
                  <div>{post.title}</div>
                  <div>{post.content}</div>
                  <div>{post.created_at}</div>
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
      <div>
        {!auth && (
          <>
            <a href="/login">Log in</a>
            <a href="/sign-up">Sign up</a>
          </>
        )}
        {auth && (
          <>
            <a href="/create-post">Create Post</a>
            <a href="/posts">My Posts</a>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
