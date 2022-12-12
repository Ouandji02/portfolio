import React from "react";
import Nav from "../components/Nav";
import img from "../assets/images/image.png";

export default function Header() {
  return (
    <header
      id="accueil"
      class="pt-20 max-lg:pt-20 max-xl:px-10 pb-10 bg-cover bg-center bg-no-repeat px-20 bg-gradient-to-r from-white via-white to-[#B2ABD0] max-sx:px-5 max-sx:pr-2"
    >
      <div className="animate-wave">
        <div className="relative flex max-h-screen max-w-screen lg:items-center mx-auto justify-between max-md:block">
          <div className="max-w-md text-center sm:text-left max-md:w-full">
            <h1 className="font-extrabold max-sm:text-4xl">
              Salut , Je suis <br className="block max-md:hidden" />
              <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                OUANDJI THIERRY 👋
              </span>
            </h1>
            <p className="text-gray-400 text-xs font-bold my-5 animate-wave">
              Je suis developpeur mobile ayant une certaine expertise en
              programmation kotlin.Je fais egalement du developpement web
              notamment avec les technologies ReactJS et NextJs
            </p>
            <button className="bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold">
              Dit Bonjour!
            </button>
            <div className="flex justify-between text-gray-600 mt-10 max-sm:block">
              <div className="py-3 px-8 align-center bg-gray-100 text-center mb-2 bg-[#F6EAF6]">
                <span className="text-black font-semibold text-xl">+2Y</span>
                <br />
                <span className="text-xs font-bold pt-3">Experience</span>
              </div>
              <div className="py-3 px-5 align-center bg-gray-100 text-center mb-2 bg-[#F6EAF6]">
                <span className="text-black font-bold text-xl">10</span>
                <br />
                <span className="text-xs font-semibold pt-3">
                  Projets accomplis
                </span>
              </div>
              <div className="py-3 px-7 align-center bg-gray-100 text-center mb-2 bg-[#F6EAF6]">
                <span className="text-black font-bold text-xl">8</span>
                <br />
                <span className="text-xs font-semibold pt-3">
                  Clients contents
                </span>
              </div>
            </div>
          </div>
          <div className="shadow rounded bg-white pb-0 max-lg:max-w-xs max-lg:h-3/4 max-md:hidden max-h-96 ">
            <img src={img} alt="" className="h-96 w-96" />
          </div>
        </div>
        <div className="animate-wave animate-bounce py-10 flex justify-center bg-white shadow rounded relative top-[200px] mb-3 flex-wrap max-lgsm:w-auto max-mdsm:justify-center max-mdsm:top-[100px]">
          <div className=" p-5 bg-gray-100 rounded max-w-sm max-h-80 max-mdsm:max-w-full mb-10">
            <img src={img} alt="" className="max-h-80" />
            <div className="relative flex bg-white p-2 shadow top-[-50px] rounded">
              <button className="mx-1 bg-secondary text-white">dsfd</button>
              <button className="mx-1 bg-secondary text-white">sfd</button>
              <button className="mx-1 bg-secondary text-white">sdff</button>
            </div>
          </div>
          <div className="max-w-md max-lgsm:max-w-sm max-mdsm:max-w-full ml-10">
            <h1 className="text-3xl my-3 font-extrabold max-sm:text-xl">
              I am Professional User Experience Designer
            </h1>
            <div className="text-xs text-gray-500 ">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </div>
            <div className="text-xs text-gray-500 my-3">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </div>
            <div>
              <button className="mr-10 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center ">
                My projet
              </button>
              <button className="bg-white text-[#BC5ABA] border-[#BC5ABA] font-extrabold hover:border-[#422E7B] hover:text-[#422E7B] ">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
