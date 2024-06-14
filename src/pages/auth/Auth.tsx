import { Outlet } from "react-router-dom";
import styles from "./Auth.module.css";

export default function Auth() {
  return (
    <>
      <div className={styles.containerBox}>
        <div className="main w-full bg-white py-10 rounded-md shadow-xl md:flex md:max-w-4xl xl:px-2">
          <div className="main__banner hidden md:grid basis-1/2 place-items-center">
            <img src="/img/dev.svg" alt="banner_img" />
          </div>
          <div className="main__formBox max-w-md m-auto basis-1/2">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
