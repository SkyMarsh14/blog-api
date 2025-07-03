import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styles from "../styles/user.module.css";
import FetchError from "../components/FetchError";
const User = () => {
  const { data, error, loading } = useFetch("user");
  const navigate = useNavigate();
  function handleClick(userId) {
    navigate(`/user/${userId}/edit`);
  }
  return (
    <div>
      <main className={styles.main_container}>
        {data && (
          <table className={styles.users}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Role</th>
                <th>Username</th>
                <th>Posts </th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {data.user.map((user) => {
                return (
                  <tr onClick={() => handleClick(user.id)} key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.role}</td>
                    <td>{user.username}</td>
                    <td>{user.posts.length}</td>
                    <td>{user.comments.length}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {error && <FetchError />}
      </main>
    </div>
  );
};

export default User;
