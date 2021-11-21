import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidbar from "../Sidbar/Sidbar";

export default function Home() {
  return (
    <div className="bg-gray-100 h-auto" dir="rtl">
      <Header />
      <Sidbar />
      <hr className="mt-16 mx-5 bg-gray-500 shadow-xl" />
      <Footer />
    </div>
  );
}
