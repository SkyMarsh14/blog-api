import Form from "../components/Form";
import styles from "../styles/login.module.css";
const Login = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.main_container}>
        <div className={styles.text_center}>
          <h2>Admin Page</h2>
          <div>Sign in to your account to continue</div>
        </div>
        <div className={styles.form_container}>
          <Form type="login" url={import.meta.env.VITE_BLOGAPI} />
          <div>
            <p>Only users with admin previleges can view this site.</p>
            <a href={import.meta.env.VITE_MAIN_SITE}>Return to main site</a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;
