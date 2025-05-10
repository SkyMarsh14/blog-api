import App from "./App/App";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Sign_up from "./pages/Sign_up";
import UserPosts from "./pages/UserPosts";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <Sign_up /> },
      { path: "posts", element: <UserPosts /> },
    ],
  },
];
export default routes;
