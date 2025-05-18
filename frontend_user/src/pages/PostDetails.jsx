import useFetch from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/PostDetails.module.css";
const PostDetails = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { data, error, loading, needsAuth } = useFetch(`posts/${postId}`);
  return <div></div>;
};
export default PostDetails;
