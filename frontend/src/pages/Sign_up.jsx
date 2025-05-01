import Form from "../components/Form";
import styles from "../styles/Login.module.css";
const Sign_up = () => {
  return (
    <main>
      <div className={styles.main_container}>
        <div className={styles.text_center}>
          <h2>Create an acocunt</h2>
          <div>Publish your passion, your way</div>
        </div>
        <div className={styles.form_container}>
          <Form type="sign-up" />
          <div>
            <p>Already have an account?</p>
            <a href="login">Log in</a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Sign_up;
