import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function App() {
  return (
    <>
      <div className="drawer lg:drawer-open bg-slate-100 min-h-screen items-start py-6 px-2">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col min-h-full items-center rounded-md lg:rounded-r-md shadow-md overflow-hidden p-1 bg-white">
          {/* --------------header-------------------- */}
          <div className=" header w-full flex justify-between ">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-outline drawer-button lg:hidden"
            >
              <img src="/img/bars-3.svg" alt="menu-icon" />
            </label>
            <div className="profileBox flex items-center gap-x-2">
              <button>
                <img src="/img/bell.svg" alt="notification-icon" />
              </button>
              <button>
                <img src="/img/notification.svg" alt="chat-icon" />
              </button>
              <button>
                <img src="/img/profile.jpg" alt="profile-icon" />
              </button>
            </div>
          </div>
          <div className="pages w-full min-h-full">
            <Outlet/>
          </div>
        </div>
        {/* ----------------side bar-------------------*/}
        <Sidebar/>
      </div>
    </>
  );
}
