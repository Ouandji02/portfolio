import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  FaAlignJustify,
  FaBeer,
  FaClosedCaptioning,
  FaHeart,
  FaTh,
  FaTimes,
} from "react-icons/fa";
import { useEffect } from "react";

export default function Nav() {
  const [state, setstate] = useState(false);

  useEffect(() => {
    menu();
  }, [state]);

  const menuClick = () => setstate((c) => !c);
  const menu = () => {
    const list = document.querySelector("ul");
    state
      ? (list.classList.remove("max-md:hidden"),
        list.classList.add("animate-menu"))
      : list.classList.add("max-md:hidden");
  };
  return (
    <nav className="bg-white py-3 px-10 flex justify-between flex-wrap max-md:px-5 fixed w-full z-[1]">
      <div>
        <img src={logo} alt="" height={200} width={100} />
      </div>
      <div className="hidden max-md:block">
        <button className="active:border-[#422E7B] hover:border-[#BC5ABA] ">
          {state ? (
            <FaTimes onClick={menuClick} color="#422E7B" size={25}/>
          ) : (
            <FaTh onClick={menuClick} color="#422E7B" size={25} />
          )}
        </button>
      </div>
      <ul className=" max-md:absolute z-[1] max-md:bg-white max-md:top-[69px] max-md:shadow flex text-sm items-center max-md:hidden max-md:block max-md: max-md:w-100 max-md:right-5 max-md:py-5 max-md:ml-0">
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a className="text-black hover:text-white" href="#accueil">
            Accueil
          </a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a className="text-black hover:text-white" href="#propos">
            A propos
          </a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a className="text-black hover:text-white" href="#processus">
            Processus
          </a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a className="text-black hover:text-white" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a className="text-black hover:text-white" href="#services">
            {" "}
            Services
          </a>
        </li>
        <button className="mx-3 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] my-2 hover:border-[#BC5ABA] font-medium">
          <li className="px-3">
            <a className="text-white hover:text-[#BC5ABA]" href="#contact">
              Contact
            </a>
          </li>
        </button>
      </ul>
    </nav>
  );
}
