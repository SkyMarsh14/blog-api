import App from "./App/App";
import Index from "./pages/Index";
import Login from "./pages/Login";
import User from "./pages/User";
import UserEdit from "./pages/UserEdit";
const routes = [
  { path: "login", element: <Login /> },
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "user", element: <User /> },
      { path: "user/:userId/edit", element: <UserEdit /> },
    ],
  },
];
export default routes;
