import Header from "../components/Header";
import { useState, useEffect } from "react";
import UserContext from "../helper/UserContext";
import { Outlet, useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    return token || false;
  });
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  });
  return (
    <UserContext.Provider value={[auth, setAuth]}>
      <Header></Header>
      <Outlet></Outlet>
    </UserContext.Provider>
  );
};
export default App;
