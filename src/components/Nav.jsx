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
    toggleTheme();
  }, [state]);

  const menuClick = () => setstate((c) => !c);
  const menu = () => {
    const list = document.querySelector("ul");
    state
      ? (list.classList.remove("max-md:hidden"),
        list.classList.add("animate-menu"))
      : list.classList.add("max-md:hidden");
  };

  const toggleTheme = () => {
    const checkbox = document.querySelector("#checkbox");
    const html = document.querySelector("html");

    const toggleDarkMode = function () {
      checkbox.checked
        ? html.classList.add("dark")
        : html.classList.remove("dark");
    };

    //calling the function directly

    toggleDarkMode();
    checkbox.addEventListener("click", toggleDarkMode);
  };

  return (
    <nav className="bg-white py-3 px-20 dark:text-gray-700 dark:bg-dark flex justify-between flex-wrap max-md:px-5 fixed w-full z-[5] items-center">
      <div>
        <img src={logo} alt="" height={200} width={100} />
      </div>
      <div class="flex justify-end items-center space-x-2 mx-auto relative dark:text-white">
        <span class="text-xs font-extralight text-gray-600">Light </span>

        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" id="checkbox" value="" class="sr-only peer" />
          <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  dark:peer-focus:ring-dark rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700"></div>
        </label>

        <span class="text-xs font-semibold">Dark</span>
      </div>
      <div className="hidden max-md:block">
        <button className="active:border-[#422E7B] hover:border-[#BC5ABA] px-4 py-2 border-white dark:bg-dark">
          {state ? (
            <FaTimes onClick={menuClick} color="#422E7B" size={25} />
          ) : (
            <FaTh onClick={menuClick} color="#422E7B" size={25} />
          )}
        </button>
      </div>
      <ul className="px-1 dark:bg-dark dark:bg-bgdark max-md:absolute z-[1] max-md:bg-white max-md:top-[60px] max-md:shadow flex text-sm items-center max-md:hidden max-md:block max-md: max-md:w-100 max-md:right-5 max-md:py-5 max-md:ml-0">
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a
            className="px-3 hover:text-white font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded text-gray-600"
            href="#accueil"
          >
            Accueil
          </a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a
            className="text-gray-600 px-3 hover:text-white font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded"
            href="#propos"
          >
            A propos
          </a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a
            className="text-gray-600 px-3 hover:text-white font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded"
            href="#processus"
          >
            Processus
          </a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a
            className="text-gray-600 px-3 hover:text-white dark:text-white font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded"
            href="#portfolio"
          >
            Portfolio
          </a>
        </li>
        <li className="px-3 hover:text-[#422E7B] font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded">
          <a
            className="text-gray-600 px-3 hover:text-white font-medium active:text-[#422E7B] py-2 hover:bg-[#422E7B] hover:text-white rounded"
            href="#services"
          >
            {" "}
            Services
          </a>
        </li>
        <button className="border-white dark:bg-dark px-4 py-2 rounded transition duration-1000 mx-3 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] my-2 hover:border-[#BC5ABA] font-medium">
          <li className="">
            <a className="px-5 text-white hover:text-[#BC5ABA]" href="#contact">
              Contact
            </a>
          </li>
        </button>
      </ul>
    </nav>
  );
}
