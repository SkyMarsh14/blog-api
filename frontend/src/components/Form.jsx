import styles from "../styles/Form.module.css";
import blog_api from "../helper/blog_api";
import { TriangleAlert } from "lucide-react";
import { useState } from "react";
const LoginForm = ({ type }) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    adminPassword: "",
  });
  const [message, setMessage] = useState(null);
  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setMessage(null);
    if (form.adminPassword === "") {
      delete form.adminPassword;
    }
    const options = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(blog_api, options);
      const json = await response.json();
      if (Object.hasOwn(json, "message")) {
        setMessage(json.message);
        setForm({
          username: "",
          password: "",
          adminPassword: "",
        });
      }
    } catch (errr) {
      throw new Error(`Server error. Response status: ${response.status}`);
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {message && (
        <div className={styles.error}>
          <TriangleAlert className={styles.icon} />
          <div>{message}</div>
        </div>
      )}
      <div className={styles.form_field}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={form.username}
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
          value={form.password}
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
            value={form.adminPassword}
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
