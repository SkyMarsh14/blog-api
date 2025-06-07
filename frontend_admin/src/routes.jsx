import App from "./App/App";
import Index from "./pages/Index";
import Login from "./pages/Login";
import User from "./pages/User";
const routes = [
  { path: "login", element: <Login /> },
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "user", element: <User /> },
    ],
  },
];
export default routes;
