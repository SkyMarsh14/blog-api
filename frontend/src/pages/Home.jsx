import useFetch from "../hooks/useFetch";
const Home = () => {
  const { data, error, loading } = useFetch(
    "https://blog-api-production-d003.up.railway.app/posts/"
  );
  return (
    <main>
      <div>
        <h1>Publish your passion, your way</h1>
        <p>Create a unique and beautiful blog easily.</p>
        <LoginDiv />
      </div>
      {loading ? <div>Loading...</div> : data && <div>{data}</div>}
      {error && <div>{error}</div>}
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
