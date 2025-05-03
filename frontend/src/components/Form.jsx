import styles from "../styles/Form.module.css";
import { useState } from "react";
const LoginForm = ({ type }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    adminPassword: "",
  });
  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (form.adminPassword === "") {
      delete form.adminPassword;
    }
    const formData = new FormData();
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_field}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
      </div>
      <div className={styles.form_field}>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
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
