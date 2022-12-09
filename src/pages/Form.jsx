import React from "react";

export default function Form() {
  return (
    <div className="relative top-[150px] bg-white flex justify-center p-10 rounded shadow-lg max-md2:px-5 max-md2:flex-wrap ">
      <div className="mr-5 max-md2:w-3/4 max-xs:text-sm max-xs:w-full max-xs:px-5">
        <h1 className="font-black text-2xl">Let’s discuss your Project</h1>
        <p className="my-5 text-xs text-gray-500">
          There are many variations of passages of Lorem Ipsu available. but the
          majority have suffered alte.
        </p>
        <div className="flex mb-5 hover:shadow-lg hover:bg-white hover:scale-md hover:rounded">
          <div className="p-3">
            <button className="hover:bg-[#422E7B]">h</button>
          </div>
          <div className="p-3">
            <p>Adress</p>
            <p>Dschang, Brasserie</p>
          </div>
        </div>
        <div className="flex mb-5 hover:shadow-lg hover:bg-white hover:rounded">
          <div className="p-3">
            <button className="hover:bg-[#422E7B]">h</button>
          </div>
          <div className="p-3">
            <p>Adress</p>
            <p>Dschang, Brasserie</p>
          </div>
        </div>
        <div className="flex mb-5 hover:shadow-lg hover:bg-white hover:rounded">
          <div className="p-3">
            <button className="hover:bg-[#422E7B]">h</button>
          </div>
          <div className="p-3">
            <p>Adress</p>
            <p>
              <b>Dschang, Brasserie</b>
            </p>
          </div>
        </div>
        <div className="flex">
          <button className="hover:bg-[#422E7B] hover:text-white mr-3">
            f
          </button>
          <button className="hover:bg-[#422E7B] hover:text-white mr-3">
            h
          </button>
          <button className="hover:bg-[#422E7B] hover:text-white mr-3">
            h
          </button>
          <button className="hover:bg-[#422E7B] hover:text-white mr-3">
            h
          </button>
        </div>
      </div>
      <div className=" text-gray-500 text-xs ml-15 mt-5 max-md2:w-3/4 max-xs:w-full max-xs:px-5 max-md2:ml-0 pt-5">
        <p>
          There are many variations of passages of Lorem Ipsu available. but the
          majority have suffered alte.
        </p>
        <form action="">
          <div className="relative z-0 w-full group my-8">
            <input
              type="email"
              name="email"
              id="email"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute top-[50px] text-sm text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full group my-8">
            <input
              type="email"
              name="email"
              id="email"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute top-[50px] text-sm text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>
          <div className="relative z-0 w-full group my-8">
            <input
              type="email"
              name="email"
              id="email"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute top-[50px] text-sm text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Location
            </label>
          </div>
          <div className="relative z-0 w-full group my-8">
            <input
              type="email"
              name="email"
              id="email"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute top-[50px] text-sm text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              subject
            </label>
          </div>
          <div className="relative z-0 w-full group my-8">
            <input
              type="email"
              name="email"
              id="email"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute top-[50px] text-sm text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <div>
            <button className="rounded text-sm mr-10 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
