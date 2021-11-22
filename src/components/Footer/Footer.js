import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage:
          "url(	https://website-a.vercel.app/images/footer-agency.png)",
        backgroundSize: "100% 300px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: " bottom",
      }}
      className="mt-20 mx-3 "
    >
      <div className=" lg:grid lg:grid-cols-4 gap-14 text-right">
        <div className=''>
          <h1 className="text-2xl mx-8 sm:mx-32 text-right text-gray-700 my-5">
            Teach Bess
          </h1>
          <p className="text-sm  font-bold text-gray-400 text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-20 my-5">
              <img
                className="w-5"
                src="./image/instagram.png"
                alt="instagram"
              />
              <img className="w-5" src="./image/linkedin1.png" alt="linkedin" />
              <img className="w-5" src="./image/telegram1.png" alt="telegram" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl text-gray-700 my-5">تماس با ما</h1>
          <p className="text-sm text-gray-400 font-bold my-3">
            آدرس دفتر ترکیه
          </p>
          <p className="text-sm text-gray-400 font-bold my-3">
            آدرس دفتر نیویورک
          </p>
          <p className="text-sm text-gray-400 font-bold my-3">0000 000 021</p>
          <p className="text-sm text-gray-400 font-bold my-3">
            teachbess@gmail.com
          </p>
          <p className="text-sm text-gray-400 font-bold my-3">website.com</p>
        </div>
        <div>
          <h1 className="text-2xl text-gray-700 my-5">درباره ما</h1>
          <p className="text-sm text-gray-400 font-bold my-3">شرکت</p>
          <p className="text-sm text-gray-400 font-bold my-3">پروژه‌ها</p>
          <p className="text-sm text-gray-400 font-bold my-3">مناسبت‌ها</p>
          <p className="text-sm text-gray-400 font-bold my-3">جوایز</p>
          <p className="text-sm text-gray-400 font-bold my-3">
            موقعیت‌های شغلی
          </p>
        </div>
        <div>
          <h1 className="text-2xl text-gray-700 my-5">نرم افزار سفارشی</h1>
          <p className="text-sm text-gray-400 font-bold my-3">طراحی وب سایت</p>
          <p className="text-sm text-gray-400 font-bold my-3">پروژه‌ها</p>
          <p className="text-sm text-gray-400 font-bold my-3">توسعه اپلیکیشن</p>
        </div>
      </div>
    </div>
  );
}
