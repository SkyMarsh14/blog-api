import styles from "../styles/Form.module.css";
const LoginForm = ({ type, url }) => {
  return (
    <form className={styles.form} action={url} method="post">
      <div className={styles.form_field}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
        />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Password"
          name="password"
        />
      </div>
      {type === "sign-up" && (
        <div className={styles.form_field}>
          <label htmlFor="adminPassword">Admin Password</label>
          <input
            type="text"
            id="adminPassword"
            placeholder="Admin Password (Optional)"
            name="adminPassword"
          />
        </div>
      )}
      <button className={styles.btn} type="submit">
        {type === "sign-up" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
