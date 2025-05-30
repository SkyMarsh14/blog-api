import Form from "../components/Form";
import styles from "../styles/Login.module.css";
const Login = () => {
  return (
    <main>
      <div className={styles.main_container}>
        <div className={styles.text_center}>
          <h2>Welcome back</h2>
          <div>Sign in to your account to continue</div>
        </div>
        <div className={styles.form_container}>
          <Form type="login" url={import.meta.env.VITE_BLOG_API} />
          <div>
            <p>Don't have an account?</p>
            <a href="sign-up">Sign up</a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;
