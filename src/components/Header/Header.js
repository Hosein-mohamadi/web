import React from "react";
import Navbar from "../Navbar.js/Navbar";
import "./style.css";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <div className="over ">
      <Navbar />
      <div>
        <Fade right>
          <div className="md:grid md:grid-cols-2 md:mt-32 relative">
            <div className="mt-16 md:mt-0 text-right md:mx-32">
              <h1 className="mt-32  text-2xl md:text-3xl text-gray-700 lg:text-white mx-5">
                ما آژانس خلاق استارت آپی هستیم
              </h1>
              <div className=" sm:w-auto md:w-9/12 mx-5">
                <p className="text-sm font-bold text-gray-400 mt-5 text-justify mx-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                </p>
              </div>
              <div className="flex mr-5 mt-8">
                <button className=" border-2 border-red-700  rounded-full w-32 ml-8 py-2 bg-linir ">
                  تماس با ما
                </button>
                <button className="border border-red-700 rounded-full w-32 py-2 bg-linir ">
                  تماس با ما
                </button>
              </div>
            </div>
            <div className="mx-3 relative mb-96 mt-16">
              <img
                className="w-auto absolute"
                src="	https://website-a.vercel.app/images/hero-img.svg"
                alt="svg"
              />
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="lg:grid lg:grid-cols-2 lg:mx-10 md:pb-48">
            <div className=" md:w-auto text-center">
              <div className="bg-blue-200 div-anmition rounded-full absolute mx-0"></div>
              <div
                className="pt-20 mx-5 text-center opacity-90 lg:mt-14 "
                dir="rtl"
              >
                <h1 className="text-2xl">بهترین خدمات ما</h1>
                <div className="flex justify-center">
                  <p className="text-sm sm:w-8/12  font-bold text-gray-500 mt-5 text-justify ">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد
                  </p>
                </div>
                <button className="border-2  border-red-700  rounded-full w-32 ml-48 mt-5  py-1 bg-linir">
                  اطلاعات بیشتر
                </button>
              </div>
            </div>
            <div>
              <div className="flex justify-center lg:mt-10">
                <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                  <div className="w-80 lg:w-60 h-40 bg-card-1 my-3 lg:my-0  flex justify-center text-center  rounded-md">
                    <div className="">
                      <img
                        className=" object-center w-20 mt-5 mr-4 img-anmition"
                        src="	https://website-a.vercel.app/images/mobileapp.png"
                        alt="اپلکیشن موبایل"
                      />
                      <h1 className="text-2xl font-bold text-white my-3">
                        اپلکیشن موبایل
                      </h1>
                    </div>
                  </div>
                  <div className="w-80 lg:w-60 h-40 bg-card-2 my-3 lg:my-0 flex justify-center text-center  rounded-md">
                    <div className="">
                      <img
                        className=" object-center w-20 mt-5 mr-8 img-anmition"
                        src="https://website-a.vercel.app/images/webdesign.png"
                        alt=" طراحی وب سایت"
                      />
                      <h1 className="text-2xl font-bold text-white my-3">
                        طراحی وب سایت
                      </h1>
                    </div>
                  </div>
                  <div className="w-80 lg:w-60 h-40 bg-card-3 my-3 lg:my-0 flex justify-center text-center  rounded-md">
                    <div className="">
                      <img
                        className=" object-center w-20 mt-5  img-anmition ml-4"
                        src="https://website-a.vercel.app/images/marketing.png"
                        alt=" بازار یابی"
                      />
                      <h1 className="text-2xl font-bold text-white my-3">
                        بازار یابی
                      </h1>
                    </div>
                  </div>
                  <div className="w-80 lg:w-60 h-40 bg-card-4 my-3 lg:my-0 flex justify-center text-center  rounded-md">
                    <div className="">
                      <img
                        className=" object-center w-20 mt-5 img-anmition ml-4"
                        src="https://website-a.vercel.app/images/marketing.png"
                        alt="نام تجاری"
                      />
                      <h1 className="text-2xl font-bold text-white my-3">
                        نام تجاری
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
