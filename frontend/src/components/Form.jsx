const LoginForm = ({ type }) => {
  return (
    <form action="" method="post">
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="Password" />
      </div>
      {type === "sign-up" && (
        <div>
          <label htmlFor="adminPassword">Admin Password</label>
          <input
            type="text"
            id="adminPassword"
            placeholder="Admin Password (Optional)"
          />
        </div>
      )}
      <button>{type === "sign-up" ? "Sign Up" : "Login"}</button>
    </form>
  );
};

export default LoginForm;
