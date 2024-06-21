import { Button } from "react-daisyui";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/authHooks";
import { logout } from "../contexts/authSlice";

export default function Sidebar() {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutAction=()=>{
    dispatch(logout())
    navigate("/auth")} 
  return (
    <>
      <nav className="drawer-side h-full shadow-lg">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 space-y-6 w-60 min-h-full bg-white text-black lg:bg-white lg:rounded-l-xl">
          <li className="grid place-items-center py-6">
            <Button className="bg-transparent border-0" onClick={logoutAction}>
            <img src="/img/power.jpg" alt="power-icon" />
            </Button>
          </li>
          <li className="hover:bg-slate-200 rounded-sm transition-all duration-200 ease-in-out">
            <Link to={"dashboard"} >
              <img className="w-4 aspect-square" src="/img/dashboard.svg" alt="dashboard-icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 rounded-sm transition-all duration-200 ease-in-out">
            <Link to={"pedidos"} >
              <img className="w-4 aspect-square" src="/img/car-shop.svg" alt="car-shop-icon" />
              <span>Pedidos</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 rounded-sm transition-all duration-200 ease-in-out">
            <Link to={"products"} >
              <img className="w-4 aspect-square" src="/img/product.svg" alt="product-icon" />
              <span>Productos</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 rounded-sm transition-all duration-200 ease-in-out">
            <Link to={"envios"} >
              <img className="w-4 aspect-square" src="/img/truck.png" alt="truck-icon" />
              <span>Envíos</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 rounded-sm transition-all duration-200 ease-in-out">
            <Link to={"pagos"} >
              <img className="w-4 aspect-square" src="/img/card.svg" alt="card-icon" />
              <span>Pagos</span>
            </Link>
          </li>
          <li className="hover:bg-slate-200 rounded-sm transition-all duration-200 ease-in-out">
            <Link to={"config"} >
              <img className="w-4 aspect-square" src="/img/setting.svg" alt="setting-icon" />
              <span>Configuración</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
