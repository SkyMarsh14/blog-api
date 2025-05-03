import useFetch from "../hooks/useFetch";
import styles from "../styles/Home.module.css";
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
  return (
    <div>
      <p>Join our community to create and view other's creation.</p>
      <div>
        <a href="/login">Log in</a>
        <a href="/sign-up">Sign up</a>
      </div>
    </div>
  );
};

export default Home;
