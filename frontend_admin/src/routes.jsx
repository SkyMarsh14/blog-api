import App from "./App/App";
import Index from "./pages/Index";
import Login from "./pages/Login";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Index /> }],
  },
  { path: "login" },
];
export default routes;
