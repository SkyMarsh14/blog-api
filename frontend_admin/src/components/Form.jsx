import styles from "../styles/form.module.css";
import { TriangleAlert, UserCheck } from "lucide-react";
import UserContext from "../helper/UserContext";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
const LoginForm = ({ type, url }) => {
  const [auth, setAuth] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    adminPassword: "",
  });
  const [message, setMessage] = useState(null);
  const [errors, setErrors] = useState(null);
  const [disabled, setDisabled] = useState(false);
  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    setErrors(null);
    const options = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (Object.hasOwn(json, "errors")) {
        setErrors(json.errors);
        errors.forEach((error) => {
          setForm((prev) => ({ ...prev, [error.path]: "" }));
        });
      }
      if (Object.hasOwn(json, "token")) {
        localStorage.setItem("token", json.token);
        setAuth(true);
        return navigate("/");
      }
      if (Object.hasOwn(json, "user")) {
        setMessage(
          "Your account has been successfully created! Redirecting..."
        );
        setDisabled(true);
        setTimeout(() => {
          setMessage(null);
          setDisabled(false);
          return navigate("/login");
        }, 4000);
      }
    } catch (errr) {
      throw new Error(`Server error. Response status: ${response.status}`);
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {message && (
        <div className={`${styles.success} ${styles.fade_in}`}>
          <UserCheck></UserCheck>
          <div>{message}</div>
        </div>
      )}
      {errors &&
        errors.map((error) => (
          <div className={styles.error} key={crypto.randomUUID()}>
            <TriangleAlert className={styles.icon} />
            <div>{error.msg}</div>
          </div>
        ))}
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
            onChange={handleChange}
            value={form.adminPassword}
          />
        </div>
      )}
      <button className={styles.btn} type="submit" disabled={disabled}>
        {type === "sign-up" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
