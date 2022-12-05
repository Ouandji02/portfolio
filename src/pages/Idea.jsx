import React from "react";

export default function Idea() {
  return (
    <section className="bg-[#422E7B] px-20 py-10 text-white">
      <div className="flex flex-col items-center my-5">
        <h1 className="w-1/2 text-3xl text-center">
          Do you have Project Idia? Let's discuss your project!
        </h1>
        <p className="w-1/2 text-xs text-center my-5">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <div className="ml-10 text-center">
          <button className="rounded mr-10 bg-[#BC5ABA] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center ">
            My projet
          </button>
        </div>
      </div>
    </section>
  );
}