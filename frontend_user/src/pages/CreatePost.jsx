import { useState } from "react";
const CreatePost = () => {
  const [isChecked, setIsChecked] = useState(false);
  function handleCheck() {
    setIsChecked((checked) => !checked);
  }
  return (
    <div>
      <main>
        <div>
          <h1>Create a New Post</h1>
          <div>Share your thoughts with others!</div>
        </div>
        <form action="">
          <div>
            <label htmlFor="post-title">Post Title</label>
            <input type="text" placeholder="Post Title" id="post-title" />
          </div>
          <div>
            <label htmlFor="post-content">Post Content</label>
            <textarea
              type="text"
              placeholder="What's happening?"
              id="post-content"
            />
          </div>
          <div>
            <label htmlFor="publish-status">Publish this post</label>
            <input
              type="checkbox"
              id="publish-status"
              checked={isChecked}
              onChange={handleCheck}
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
