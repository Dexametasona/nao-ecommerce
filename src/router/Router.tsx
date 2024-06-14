import { createBrowserRouter, Navigate } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Login from "../pages/auth/Login";
import Regist from "../pages/auth/Regist";
import App from "../pages/app/App";
import Dashboard from "../pages/app/Dashboard";
import Products from "../pages/app/Products";

export const ROUTES = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "login", element: <Login /> },
      { path: "regist", element: <Regist /> },
      { path: "", element: <Navigate to={"login"} />, index: true },
    ],
  },
  {
    path:"/app",
    element:<App/>,
    children:[
      {path:"dashboard", element:<Dashboard/>},
      {path:"products", element:<Products/>},
      {path:"", element:<Navigate to={"dashboard"}/>, index:true},
    ]
  },
  { path: "/", element: <Navigate to={"/auth"} />, index: true },
  // { path: "*", element: <Auth /> },
]);
