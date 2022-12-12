import React from "react";

export default function What() {
  return (
    <section className="px-20 py-10 bg-gray-100 max-xs:px-5">
      <div className="animate-wave  min-h-screen flex justify-around items-center flex-wrap max-md2:w-full">
        <div className="text-gray-500 w-2/5 max-xs:w-full max-sm:w-4/5 max-lg:w-3/4 text-center">
          <h1 className="text-black font-extrabold text-center">What I do ?</h1>
          <p className="text-xs mt-5 my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p className="text-xs mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
          <button className="rounded mr-10 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center ">
            My projet
          </button>
        </div>
        <div className="flex flex-col justify-around text-gray-500 w-2/5 max-md2:w-full">
          <div className="bg-white rounded shadow p-5 hover:border-l-4 hover:border-[#BC5ABA] my-2">
            <h1 className="text-xl font-extrabold text-black">
              User Experience (UX)
            </h1>
            <p className="mt-5 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
          <div className="bg-white rounded shadow p-5 hover:border-l-4 hover:border-[#BC5ABA] my-2">
            <h1 className="text-xl font-extrabold text-black">
              User Experience (UX)
            </h1>
            <p className="mt-5 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
          <div className="bg-white rounded shadow p-5 hover:border-l-4 hover:border-[#BC5ABA] my-2">
            <h1 className="text-xl font-black text-black">
              User Experience (UX)
            </h1>
            <p className="mt-5 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
