import Header from "../components/Header";
import { useState } from "react";
import UserContext from "../helper/UserContext";
import { Outlet } from "react-router-dom";
const App = () => {
  const getInitialState = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  const [auth, setAuth] = useState(getInitialState);
  return (
    <UserContext.Provider value={[auth, setAuth]}>
      <Header></Header>
      <Outlet></Outlet>
    </UserContext.Provider>
  );
};
export default App;
