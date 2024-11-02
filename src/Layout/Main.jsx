import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen ">
        <div className="md:px-20 px-2  pt-5">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
