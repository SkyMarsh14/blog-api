import { Plus } from "lucide-react";
import styles from "../styles/UserPosts.module.css";
import useFetch from "../hooks/useFetch";
const UserPosts = () => {
  const { data, error, loading } = useFetch("user/posts");
  console.log(data);
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
        {data && data.posts.length === 0 && (
          <>
            <p>You have no posts yet.</p>
            <p>
              Write your first post from <a href="create-post">here!</a>
            </p>
          </>
        )}
        {data &&
          data.posts.map((post) => (
            <div key={post.id}>
              <div>Post Title: {post.title}</div>
              <div>Content: {post.content}</div>
              <div>Published? {post.published}</div>
              <div>Created at {post.createdAt}</div>
              <div>Updated at {post.updatedAt}</div>
            </div>
          ))}
      </main>
    </div>
  );
};
export default UserPosts;
