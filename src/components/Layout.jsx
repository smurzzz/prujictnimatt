import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Brands from "../pages/Brands";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <div>
      <main className="font-sans min-h-screen background">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
