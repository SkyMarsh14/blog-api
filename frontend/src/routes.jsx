import App from "./App/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
    ],
  },
];
export default routes;
