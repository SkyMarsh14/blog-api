import useFetch from "../hooks/useFetch";
const Home = () => {
  return (
    <main>
      <div>
        <h1>Publish your passion, your way</h1>
        <p>Create a unique and beautiful blog easily.</p>
        <LoginDiv />
      </div>
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
