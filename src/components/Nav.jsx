import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";

export default function Nav() {
  const [state, setstate] = useState(false);

  const menu = () => {
    const list = document.querySelector("ul");
    setstate((c) => !c);
    state
      ? (list.classList.remove("max-md:hidden"))
      : (list.classList.add("max-md:hidden"));
  };
  return (
    <nav className="bg-white py-3 px-10 flex justify-between flex-wrap max-md:px-5">
      <div>
        <img src={logo} alt="" height={200} width={100} />
      </div>
      <div className="hidden max-md:block">
        <button
          onClick={menu}
          className="bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold"
        >
          Open
        </button>
      </div>
      <ul className=" max-md:absolute z-[1] max-md:bg-white max-md:top-[69px] max-md:shadow flex text-sm items-center max-md:hidden max-md:block max-md: max-md:w-100 max-md:right-5 max-md:py-5 max-md:ml-0">
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
        <a href="accueil">Accueil</a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
        <a href="propos">A propos</a>  
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
        <a href="#processus">Processus</a>  
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          Portfolio
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          Blog
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          Services
        </li>
        <button className="mx-3 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] my-2 hover:border-[#BC5ABA] font-medium">
          <li className="px-3">Contact</li>
        </button>
      </ul>
    </nav>
  );
}
