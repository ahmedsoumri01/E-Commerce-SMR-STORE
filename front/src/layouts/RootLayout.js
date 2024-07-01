import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <div>
      <ToastContainer />
      <main className="bg-gray-200/60" >
        <Header />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
