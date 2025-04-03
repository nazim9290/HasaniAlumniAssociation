import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Main() {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("Dashboard") ||
    location.pathname.includes("login") ||
    location.pathname.includes("Signup");

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div>
      {noHeaderFooter || <NavBar></NavBar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
}
