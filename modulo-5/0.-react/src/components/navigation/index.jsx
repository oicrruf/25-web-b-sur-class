import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";
import Login from "../screen/Login/Login.jsx";
import Dashboard from "../screen/Dashboard/Dashboard.jsx";
import SignUp from "../screen/SignUp/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);

export default router;
