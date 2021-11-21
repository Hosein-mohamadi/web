import React from "react";
import "./style.css";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

import { box_arrey } from "./Data";
import { img_arrey } from "./Data";
import { card } from "./Data";
import { user } from "./Data";
import { card_user } from "./Data";
import { Fade, Reveal, Rotate, Zoom } from "react-reveal";

export default function Sidbar() {
  return (
    <div>
      <div className="mt-10 ">
        <Bounce left>
          <div className="text-right mx-6">
            <h1 className="text-indigo-900 text-3xl">چرا شرکت ما؟</h1>
            <div className="lg:w-6/12 md:w-10/12">
              <p className="text-justify text-gray-500">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد
              </p>
            </div>
          </div>
        </Bounce>
        <Bounce right>
          <div className="lg:grid lg:grid-cols-2">
            <div className="flex justify-center lg:mt-10">
              <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                {box_arrey?.map((i) => (
                  <div
                    key={i.id}
                    className={`w-80 lg:w-60 h-40 ${i.class} my-3 lg:my-0  flex justify-center text-center  rounded-md`}
                  >
                    <div className="">
                      <h2 className="text-3xl my-8 text-white font-bold">
                        {i.text}
                      </h2>

                      <h1 className="text-2xl font-bold text-white my-3">
                        {i.data}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center my-8 mx-4">
              <img
                className="w-80 img-card-1"
                src="https://website-a.vercel.app/images/team-mockup.png"
                alt="team-mockup"
              />
            </div>
          </div>
        </Bounce>
        <Slide top>
          <div className="flex justify-center">
            <div className="text-center mt-10">
              <h1 className="text-3xl text-indigo-900 my-7 font-normal">
                جدیدترین وبلاگ های ما
              </h1>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-3 ">
                {img_arrey?.map((i) => (
                  <div key={i.id}>
                    <img
                      className="w-80 sm:w-7/12 md:w-9/12 sm:mr-36 md:mr-12 "
                      src={i.url}
                      alt="خلاقیت"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>
        <div>
          <div className="text-center mt-20">
            <h1 className="text-3xl text-indigo-900 my-7 font-normal">
              با تیم ما اشنا شوید
            </h1>
            <div className="bg-slider flex justify-center">
              <div className=" md:grid md:grid-cols-2 gap-2  xl:grid-cols-4">
                {card.map((i) => (
                  <Zoom>
                    <div
                      key={i.id}
                      className={`bg-white w-72 ${i.class} md:w-80 py-3  my-5 flex justify-center rounded-md`}
                    >
                      <div>
                        <img
                          className="w-28 h-28 mr-3 my-5 rounded-full"
                          src={i.url}
                          alt={i.alt_img}
                        />
                        <h1 className="text-4xl text-gray-600 font-bold my-10">
                          {i.name}
                        </h1>
                        <h1 className="text-2xl text-gray-600 my-14">
                          {i.skill}
                        </h1>
                        <div className="grid grid-cols-3 gap-5 my-5">
                          <img
                            className="w-8"
                            src="./image/instagram.png"
                            alt="instagram"
                          />
                          <img
                            className="w-8"
                            src="./image/linkedin1.png"
                            alt="linkedin"
                          />
                          <img
                            className="w-8"
                            src="./image/telegram1.png"
                            alt="telegram"
                          />
                        </div>
                      </div>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 ">
          <Reveal>
            <div className="text-right mx-14">
              <div className="lg:w-96 mx-4 lg:mx-20">
                <h1 className="text-3xl text-indigo-900 my-7 font-normal">
                  نظرات مشتریان ما
                </h1>
                <p className="text-justify text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد،
                </p>
              </div>
              <div className="flex justify-center">
                <div className="mx-4  mt-20 lg:grid gap-20 lg:grid-cols-3">
                  {user.map((i) => (
                    <div key={i.id} className="lg:mt-16">
                      <img
                        className="w-10 mr-20"
                        src="./image/message.png"
                        alt="message"
                      />
                      <div className="flex">
                        <img
                          className="w-28 h-28 mr-3 my-5 rounded-full"
                          src="	https://website-a.vercel.app/images/team1.png"
                          alt="رابرت"
                        />
                        <h1 className="text-2xl text-gray-600 font-bold mt-20 mx-4">
                          {i.name}
                        </h1>
                      </div>
                      <div className="lg:w-56">
                        <p className="text-justify text-gray-500 ">{i.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-20 mx-5 flex justify-center">
          <Rotate top left cascade>
            <div className="md:grid md:grid-cols-2 text-right md:gap-8 lg:grid-cols-3">
              {card_user.map((i) => (
                <div class="w-auto my-5 rounded overflow-hidden shadow-2xl">
                  <img
                    class="w-full"
                    src={i.url}
                    alt="Sunset in the mountains"
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-indigo-900 text-xl mb-2">
                      {i.text}
                    </div>
                    <p className="text-justify text-gray-500 ">
                      {i.paragherph}
                    </p>
                  </div>
                  <h1 className="mt-24 text-2xl mx-5 mb-5 text-purple-800">
                    {i.href}
                  </h1>
                </div>
              ))}
            </div>
          </Rotate>
        </div>
        <div className="md:mx-20 mx-4">
          <Fade bottom big>
            <div className="bg-white lg:flex lg:justify-between shadow-2xl py-2 lg:px-16 px-2 text-center lg:text-right h-auto lg:h-32">
              <div>
                <h1 className="text-3xl text-gray-600">
                  به TechBess متصل شوید.
                </h1>
                <p className="lg:text-justify font-bold my-2 text-gray-500">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با.
                </p>
              </div>
              <button className=" border-2 border-red-800 lg:mt-8 rounded-md w-32 my-2 h-12 bg-linir ">
                تماس با ما
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
