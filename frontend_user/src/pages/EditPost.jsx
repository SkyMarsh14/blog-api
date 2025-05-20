import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "../styles/EditPost.module.css";
import sendForm from "../helper/sendForm";
import blog_api from "../helper/blog_api";
const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, error, loading, needsAuth } = useFetch(`posts/${postId}`);
  async function handleSubmit(e) {
    e.preventDefault();
    const url = blog_api + `posts/${postId}`;
    try {
      const data = await sendForm(e.currentTarget, url, navigate, "PUT");
      navigate(-1);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="main_container">
      <main>
        <div className={styles.title}>Edit Post</div>
        {data && (
          <form action="" onSubmit={handleSubmit}>
            <div className={styles.form_field}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                defaultValue={data.post.title}
              />
            </div>
            <div className={styles.form_field}>
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                defaultValue={data.post.content}
              ></textarea>
            </div>
            <div>
              <label htmlFor="published">Publish</label>
              <input
                type="checkbox"
                id="published"
                name="published"
                defaultChecked={data.post.published}
              />
            </div>
            <div>
              <button type="button">Cancel</button>
              <button type="submit">Save Edits</button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
};
export default EditPost;
