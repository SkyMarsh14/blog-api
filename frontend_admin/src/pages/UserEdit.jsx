import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import FetchError from "../components/FetchError";
import styles from "../styles/UserEdit.module.css";
import { useNavigate } from "react-router-dom";
import sendForm from "../helper/sendForm";
const UserEdit = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { data, error, loading } = useFetch(`user/${userId}`);
  async function handleDelete(e) {
    const conf = confirm(
      "You will be deleting all the comments and posts associated with the user by deleting this user. Are you sure?"
    );
    if (!conf) return;
    try {
      const url = import.meta.env.VITE_BLOGAPI + "user/" + userId;
      const token = localStorage.getItem("token");
      const options = {
        method: "DELETE",
        headers: {
          ...(token && { Authorization: `Bearer ${token}` }),
          mode: "cors",
        },
      };
      const response = await fetch(url, options);
    } catch (err) {
      console.error(err);
      return;
    }
    navigate("/user");
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const url = import.meta.env.VITE_BLOGAPI + "user/" + userId;
      const data = await sendForm(e.currentTarget, url, navigate, "PUT");
    } catch (err) {
      console.error(err);
      return;
    }
    navigate("/user");
  }
  return (
    <div>
      <main className={styles.main}>
        {data && (
          <>
            <div className={styles.title}>Edit User</div>
            <form action="" onSubmit={handleSubmit}>
              <div className={styles.form_div}>
                <label htmlFor="username">Username</label>
                <input
                  id="username"
                  type="text"
                  defaultValue={data.user.username}
                  name="username"
                />
              </div>
              <div className={styles.form_div}>
                <label htmlFor="role-select">Role</label>
                <select
                  className={styles.select}
                  id="role-select"
                  name="role"
                  defaultValue={data.user.role}
                >
                  <option value="ADMIN">Admin</option>
                  <option value="USER">User</option>
                </select>
              </div>
              <button className={styles.btn} type="submit">
                Update
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.delete_btn}`}
                onClick={handleDelete}
              >
                Delete User
              </button>
            </form>
          </>
        )}
        {error && <FetchError />}
        <a href="/user">Go back to users</a>
      </main>
    </div>
  );
};

export default UserEdit;
