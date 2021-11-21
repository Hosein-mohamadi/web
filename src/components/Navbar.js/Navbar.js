import React, { useState } from "react";
import "./style.css";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="bg-iamge absolute w-full h-full ">
        <div className="">
          <div className="bg-color flex z-10 justify-between py-3">
            <div className="navbar">
              <span>
                <img
                  onClick={() => setShow(!show)}
                  className="w-8 cursor-pointer mr-4 inline mt-2"
                  src="./image/menu.png"
                  alt="menu"
                />
              </span>
              <div
                className={
                  show
                    ? "bg-gray-700 w-60 navbar-1 h-screen z-10 fixed rounded-md top-3 "
                    : "w-0 navbar-1 z-10"
                }
              >
                <div
                  className={
                    show ? "bg-green-800 w-full h-32 text-left " : "hidden"
                  }
                >
                  <span
                    onClick={() => setShow(!show)}
                    className="text-3xl mx-3 text-red-700 font-bold cursor-pointer"
                  >
                    X
                  </span>
                  <h1 className="text-3xl font-bold mt-2 text-white mx-3">
                    .Teach Bees
                  </h1>
                  <hr className="bg-gray-500 mt-12" />
                </div>
                <div className={show ? "text-right" : "hidden"}>
                  <ul className="font-bold text-sm px-2">
                    <li className="text-blue-600 my-5">صفحه اصلی</li>
                    <hr />
                    <li className="text-blue-600 my-5">خدمات</li>
                    <hr />

                    <li className="text-blue-600 my-5">درباره ما</li>
                    <hr />

                    <li className="text-blue-600 my-5">تاریخچه</li>
                    <hr />

                    <li className="text-blue-600 my-5">تماس با ما</li>
                    <hr />
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-44 lg:ml-16 ml-4 z-50"
                src="https://website-a.vercel.app/images/logo.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
