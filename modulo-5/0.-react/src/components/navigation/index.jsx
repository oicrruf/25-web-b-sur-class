import {
  createBrowserRouter
} from "react-router-dom";
import App from '../../App.jsx'
import Login from "../screen/Login/Login.jsx";
import Register from "../screen/Register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

export default router