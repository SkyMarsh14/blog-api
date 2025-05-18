import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
const PostDetails = () => {
  const { postId } = useParams();
  const { data, error, loading, needsAuth } = useFetch(`posts/${postId}`);
  return (
    <div>
      <h1>Welcome to post details.</h1>
      <h2>Now you are visiting {postId}</h2>
    </div>
  );
};
export default PostDetails;
