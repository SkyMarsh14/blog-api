import App from "./App/App";
import Index from "./pages/Index";
import Login from "./pages/Login";
const routes = [
  { path: "login", element: <Login /> },
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Index /> }],
  },
];
export default routes;
