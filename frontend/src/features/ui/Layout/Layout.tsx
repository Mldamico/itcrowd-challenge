import { Outlet } from "react-router-dom";
import { NavBar } from "./Navbar";


export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
