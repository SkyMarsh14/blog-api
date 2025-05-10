import { Plus } from "lucide-react";
import styles from "../styles/UserPosts.module.css";
import useFetch from "../hooks/useFetch";
const UserPosts = () => {
  const { data, error, loading } = useFetch("user/posts");
  return (
    <div className={styles.main_container}>
      <div>
        <div>Your Posts</div>
        <a href="/create-post">
          <Plus />
          <div>Create New Post</div>
        </a>
      </div>
      <main>
        {loading && <div>Loading...</div>}
        {data && data.posts.map((post) => <div>{post}</div>)}
      </main>
    </div>
  );
};
export default UserPosts;
