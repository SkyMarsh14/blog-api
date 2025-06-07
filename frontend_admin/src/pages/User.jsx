import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import styles from "../styles/user.module.css";
const User = () => {
  const { data, error, loading } = useFetch("user");
  const navigate = useNavigate();
  function handleClick(userId) {
    navigate(`/user/${userId}/edit`);
  }
  return (
    <div>
      <main className={styles.main_container}>
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
          {data && (
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
          )}
        </table>
      </main>
    </div>
  );
};

export default User;
