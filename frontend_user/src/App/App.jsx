import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "../helper/UserContext";
import { useState } from "react";
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
