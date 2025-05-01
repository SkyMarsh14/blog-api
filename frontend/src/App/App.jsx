import Header from "../components/header";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
};
export default App;
