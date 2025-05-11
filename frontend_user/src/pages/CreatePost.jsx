import { useState } from "react";
import sendForm from "../helper/sendForm";
import blog_api from "../helper/blog_api";
import { useNavigate } from "react-router-dom";
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
    <div>
      <main>
        <div>
          <h1>Create a New Post</h1>
          <div>Share your thoughts with others!</div>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="post-title">Post Title</label>
            <input
              type="text"
              placeholder="Post Title"
              id="post-title"
              name="title"
            />
          </div>
          <div>
            <label htmlFor="post-content">Post Content</label>
            <textarea
              type="text"
              placeholder="What's happening?"
              id="post-content"
              name="content"
            />
          </div>
          <div>
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
              : "This post will be saved as a draft, and not be visible to other user"}
          </p>
          <button type="submit">
            {isChecked ? "Create Post" : "Save as draft"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreatePost;
