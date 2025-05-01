import styles from "../styles/Form.module.css";
const LoginForm = ({ type }) => {
  return (
    <form className={styles.form} action="" method="post">
      <div className={styles.form_field}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Username" />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="Password" />
      </div>
      {type === "sign-up" && (
        <div className={styles.form_field}>
          <label htmlFor="adminPassword">Admin Password</label>
          <input
            type="text"
            id="adminPassword"
            placeholder="Admin Password (Optional)"
          />
        </div>
      )}
      <button className={styles.btn}>
        {type === "sign-up" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
