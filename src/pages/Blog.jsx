import React from "react";
import img1 from "../assets/images/download.jpeg";
import img2 from "../assets/images/portfolio2.png";
import img3 from "../assets/images/portfolio3.png";
import img4 from "../assets/images/portfolio4.png";
import img5 from "../assets/images/portfolio5.png";
import img6 from "../assets/images/portfolio6.png";

export default function Blog() {
  return (
    <section className="px-20 bg-gradient-to-r from-white via-white to-[#B2ABD0] py-20">
      <div>
        <div id="controls-carousel" class="relative" data-carousel="static">
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
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
              </div>
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
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
              </div>
            </div>
          </div>

          <button
            type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
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
