import { useNavigate } from "react-router-dom";
import UserContext from "../helper/UserContext";
import { useContext } from "react";
const LogoutBtn = () => {
  const [auth, setAuth] = useContext(UserContext);
  const navigate = useNavigate();
  async function handleClick(e) {
    setAuth(false);
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <button type="button" onClick={handleClick}>
      Logout
    </button>
  );
};
export default LogoutBtn;
