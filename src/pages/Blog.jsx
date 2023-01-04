import React from "react";
import Swiper, { Navigation, Pagination } from "swiper";
import img1 from "../assets/images/download.jpeg";
import img2 from "../assets/images/portfolio2.png";
import img3 from "../assets/images/portfolio3.png";
import img4 from "../assets/images/portfolio4.png";
import img5 from "../assets/images/portfolio5.png";
import img6 from "../assets/images/portfolio6.png";

export default function Blog() {
  return (
    <section className="px-20  py-20">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <div class="swiper-scrollbar"></div>
      </div>
    </section>
  );
}
{
  /* <h1 className="text-3xl text-center">Blog</h1>
        <div className="flex justify-center my-5">
          <p className="text-xs text-gray-500 text-center w-1/3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="rounded shadow w-48 text-xs mb-10">
            <img src={img1} alt="" width={200} className="h-32" />
            <div className="px-2 py-3">
              <div className="text-gray-500">
                <p className="text-gray-500">22 oct 2020 / 246 comments </p>
              </div>
              <p className="my-3 font-extrabold text-sm text-black">
                Vivamus eleifend convallis ante, non pharetra libero .
              </p>
            </div>
          </div> */
}
