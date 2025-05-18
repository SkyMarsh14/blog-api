import { useState } from "react";
import sendForm from "../helper/sendForm";
import blog_api from "../helper/blog_api";
import { useNavigate } from "react-router-dom";
import styles from "../styles/CreatePost.module.css";
const CreatePost = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  function handleCheck() {
    setIsChecked((checked) => !checked);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const url = blog_api + "posts";
    try {
      const data = await sendForm(e.currentTarget, url, navigate);
      navigate("/posts");
    } catch (err) {
      setError(err);
    }
  }
  return (
    <div className={styles.main_container}>
      <main className={styles.main}>
        <div>
          <h1>Create a New Post</h1>
          <div>Share your thoughts with others!</div>
        </div>
        <form action="" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form_field}>
            <label htmlFor="post-title">Title</label>
            <input
              type="text"
              placeholder="Post Title"
              id="post-title"
              name="title"
            />
          </div>
          <div className={styles.form_field}>
            <label htmlFor="post-content">Content</label>
            <textarea
              type="text"
              placeholder="What's happening?"
              id="post-content"
              name="content"
              rows="8"
            />
          </div>
          <div>
            <div className={styles.checkbox}>
              <label htmlFor="publish-status">Publish this post</label>
              <input
                type="checkbox"
                id="publish-status"
                checked={isChecked}
                onChange={handleCheck}
                name="published"
              />
            </div>
            <p>
              {isChecked
                ? "This post will be published, and be visible to other users once you submit this form."
                : "This post will be saved as a draft, and not be visible to other user."}
            </p>
          </div>
          <button type="submit" className={styles.submit}>
            {isChecked ? "Create Post" : "Save as draft"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreatePost;
