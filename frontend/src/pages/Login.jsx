import Form from "../components/Form";
import styles from "../styles/Login.module.css";
const Login = () => {
  return (
    <main>
      <div className={styles.main_container}>
        <div className={styles.text_center}>
          <div>Welcome back</div>
          <div>Sign in to your account to continue</div>
        </div>
        <Form />
        <div>
          <p>Don't have an account?</p>
          <a href="sign-up">Sign up</a>
        </div>
      </div>
    </main>
  );
};
export default Login;
