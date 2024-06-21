import { createBrowserRouter, Navigate } from "react-router-dom";
import Auth from "../pages/auth/Auth";
import Login from "../pages/auth/Login";
import Regist from "../pages/auth/Regist";
import App from "../pages/app/App";
import Dashboard from "../pages/app/Dashboard";
import Productos from "../pages/app/Productos";
import Config from "../pages/app/Config";
import Envios from "../pages/app/Envios";
import Pagos from "../pages/app/Pagos";
import Pedidos from "../pages/app/Pedidos";

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
      {path:"config", element:<Config/>},
      {path:"envios", element:<Envios/>},
      {path:"pagos", element:<Pagos/>},
      {path:"pedidos", element:<Pedidos/>},
      {path:"products", element:<Productos/>},
      {path:"", element:<Navigate to={"dashboard"}/>, index:true},
    ]
  },
  { path: "/", element: <Navigate to={"/auth"} />, index: true },
  // { path: "*", element: <Auth /> },
]);
