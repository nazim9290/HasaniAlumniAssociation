import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Main() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
  )
}
