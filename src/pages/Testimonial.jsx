import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Swiper from "swiper";
import { Pagination } from "swiper";
import { Navigation } from "swiper";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(1);
console.log(currentSlide)
  const prev = () => {
    if (currentSlide > 1) {
      setCurrentSlide((current) => current - 1);
      console.log(currentSlide);
    }
  };

  const next = () => {
    const total = document.querySelector(".slider").childElementCount;
    if (currentSlide < total) {
      setCurrentSlide((current) => current + 1);
      console.log(currentSlide);
    }
  };

  const showSlide = () => {
    const total = document.querySelector(".slider").childElementCount;
    const slides = document.querySelector(".slider").querySelectorAll("li");
    for (let index = 0; index < total; index++) {
      const element = slides[index];
      console.log("jhgfhj", element);
      console.log("jhgfhjccccccccc", currentSlide);
      if (currentSlide === index + 1) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    }
  };

  useEffect(() => {
     showSlide()
  }, [currentSlide]);
 
  return (
    <section>
      <div className="relative">
        <div className="animate-wave">
          <h1 className="text-3xl text-center font-extrabold">Testimonial</h1>
        </div>
        <ul className="slider">
          <li className="">
            <div className="flex flex-col items-center justify-center my-5">
              <p className="mt-10 w-1/2 max-xs:w-64 max-sm:w-4/5 max-lg:w-3/4">
                “1Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                mollis felis turpis, nec semper odio convallis at. Curabitur
                imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                tincidunt ut sapien. Morbi ornare elit at libero suscipit
                porta.”
              </p>
              <p className="my-5 font-extrabold">Ouandji Thierry</p>
              <p>Manger, gerant de projet</p>
            </div>
          </li>
          <li className="hidden">
            <div className="flex flex-col items-center justify-center my-5 ">
              <p className="mt-10 w-1/2 max-xs:w-64 max-sm:w-4/5 max-lg:w-3/4">
                “3Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                mollis felis turpis, nec semper odio convallis at. Curabitur
                imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                tincidunt ut sapien. Morbi ornare elit at libero suscipit
                porta.”
              </p>
              <p className="my-5 font-extrabold">Ouandji Thierry</p>
              <p>Manger, gerant de projet</p>
            </div>
          </li>
          <li className="hidden">
            <div className="flex flex-col items-center justify-center my-5">
              <p className="mt-10 w-1/2 max-xs:w-64 max-sm:w-4/5 max-lg:w-3/4">
                “2Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                mollis felis turpis, nec semper odio convallis at. Curabitur
                imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                tincidunt ut sapien. Morbi ornare elit at libero suscipit
                porta.”
              </p>
              <p className="my-5 font-extrabold">Ouandji Thierry</p>
              <p>Manger, gerant de projet</p>
            </div>
          </li>
        </ul>
        <div className="px-0 absolute flex  w-full h-full top-0 left-0">
          <div className="flex w-full justify-between my-auto z-[1] ">
            <button
              className="rounded-full bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] shadow-medium opacity-80"
              onClick={prev}
            >
            <FaAngleLeft/>
            </button>
            <button
              className="rounded-full bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] shadow-medium opacity-80"
              onClick={next}
            >
            <FaAngleRight/>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="animate-wave ">
        <h1 className="text-3xl text-center">Testimonial</h1>
        <div className="flex flex-col items-center justify-center my-5">
          <p className="mt-10 w-1/2 max-xs:w-64 max-sm:w-4/5 max-lg:w-3/4">
            “1Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            Morbi ornare elit at libero suscipit porta.”
          </p>
          <p className="my-5 font-extrabold">Ouandji Thierry</p>
          <p>Manger, gerant de projet</p>
        </div>
      </div> */}
    </section>
  );
}
