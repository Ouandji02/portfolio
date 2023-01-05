import React from "react";
import img from "../assets/images/me5.png";
import {
  FaFacebookF,
  FaFileDownload,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Header() {
  return (
    <header
      id="accueil"
      className="z-2 pt-20 max-lg:pt-20 max-xl:px-10 pb-10 bg-cover bg-center bg-no-repeat px-20 bg-gradient-to-r from-white via-white to-[#B2ABD0] max-sx:px-5 max-sx:pr-2 dark:bg-gradient-to dark:from-dark "
    >
      <div className="animate-wave">
        <div className="relative flex max-h-screen max-w-screen lg:items-center mx-auto justify-between max-md:block">
          <div className="max-w-md text-center sm:text-left max-md:w-full">
            <h1 className="font-extrabold max-sm:text-4xl max-xs:text-2xl text-4xl text-gray-600">
              Salut , Je suis <br className="block max-md:block " />
              <span className="text-gray-600 inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                OUANDJI THIERRY 👋
              </span>
            </h1>
            <p className="text-gray-600 text-md font-bold my-5 animate-wave">
              Je suis developpeur mobile ayant une certaine expertise en
              programmation mobile (kotlin, flutter).Je fais egalement du
              developpement web notamment avec les technologies ReactJS et
              NextJs
            </p>
            <button className="border-white dark:bg-dark px-4 py-2 transition duration-1000 rounded bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold">
              Dit Bonjour!
            </button>
            <div className="flex justify-between text-gray-600 mt-10 max-sm:block text-gray-600">
              <div className="dark:bg-bgdark py-3 px-8 align-center bg-gray-100 text-center mb-2 bg-[#F6EAF6] hover:scale-120 transition duration-1000">
                <span className=" font-semibold text-xl">+1Y</span>
                <br />
                <span className="text-xs font-bold pt-3">Experience</span>
              </div>
              <div className="dark:bg-bgdark py-3 px-5 align-center bg-gray-100 text-center mb-2 bg-[#F6EAF6] hover:scale-120 transition duration-1000">
                <span className=" font-bold text-xl">10</span>
                <br />
                <span className="text-xs font-semibold pt-3">
                  Projets accomplis
                </span>
              </div>
              <div className="dark:bg-bgdark py-3 px-7 align-center bg-gray-100 text-center mb-2 bg-[#F6EAF6] hover:scale-120 transition duration-1000">
                <span className=" font-bold text-xl">8</span>
                <br />
                <span className="text-xs font-semibold pt-3">
                  Clients contents
                </span>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded bg-white pb-0 max-lg:max-w-xs max-lg:h-3/4 max-md:hidden max-h-96 ">
            <img src={img} alt="" className="h-96 w-96" />
          </div>
        </div>
        <div className="text-gray-600 dark:bg-bgdark animate-wave py-10 flex justify-center bg-white shadow-xl rounded relative top-[190px] max-md:top-[100px] max-xs:pt-0 mb-3 flex-wrap max-lgsm:w-auto max-mdsm:justify-center max-mdsm:top-[100px]">
          <div className=" p-5 bg-gray-100 rounded max-w-sm max-h-80 max-mdsm:max-w-full mb-10">
            <img src={img} alt="" className="max-h-80" />
            <div className="dark:bg-bgdark relative flex justify-between bg-white p-4 shadow-lg top-[-40px] rounded items-center">
              <a href="https://web.facebook.com/thierry.ouandji.7">
                <button className="text-gray-600 px-2 py-2 hover:scale-125 transition duration-1000 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] ">
                  <FaFacebookF size={20} />
                </button>
              </a>
              <a href="https://twitter.com/YDOL2002">
                <button className="text-gray-600 px-2 py-2 hover:scale-125 transition duration-1000 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] ">
                  <FaTwitter size={20} />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/thierry-ouandji-1b2274212/">
                <button className="text-gray-600 px-2 py-2 hover:scale-125 transition duration-1000 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] ">
                  <FaLinkedinIn size={20} />
                </button>
              </a>
              <a href="https://github.com/Ouandji02">
                <button className="text-gray-600 px-2 py-2 hover:scale-125 transition duration-1000 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] ">
                  <FaGithub size={20} />
                </button>
              </a>
            </div>
          </div>
          <div className="max-w-md max-lgsm:max-w-sm max-mdsm:max-w-full ml-10 max-mdsm:pt-10 max-mdsm:pr-5">
            <h1 className="text-3xl my-3 font-extrabold max-sm:text-xl">
              Je suis developpeur mobile et WEB
            </h1>
            <div className="text-xs text-gray-500 ">
              Je conçois et développe des services pour des clients spécialisés
              dans la création d'application mobile, services Web et boutiques
              en ligne élégants et modernes.Ma passion est de concevoir des
              applications intelligentes qui faciliterons le quotidient des
              personnes.
            </div>
            <div className="text-xs text-gray-500 my-3">
              Je realise de beaux visuels pour le prototypage d'application web,
              mobile,site web et bien d'autres
            </div>
            <div className="flex max-sm:block">
              {/* <button className="border-white dark:bg-dark px-4 py-2 transition duration-1000 rounded mr-10 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center ">
                My projet
              </button> */}
              <button className="dark:bg-dark px-4 py-2 transition duration-1000 flex items-center rounded bg-white text-[#BC5ABA] border-[#BC5ABA] font-extrabold hover:border-[#422E7B] hover:text-[#422E7B] ">
                <FaFileDownload className="mr-5 " /> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
