import React from "react";
import { FaFacebookF, FaFacebookMessenger, FaGithub, FaLinkedinIn, FaMailBulk, FaMailchimp, FaPhone, FaRegAddressCard, FaTwitter, FaVoicemail } from "react-icons/fa";

export default function Form() {
  return (
    <div className="relative top-[150px] bg-white dark:bg-bgdark flex justify-center p-10 rounded shadow-lg max-md:px-5 max-md:flex-wrap max-sm:w-full">
      <div className="mr-5 max-md:w-3/4 max-xs:text-sm max-sm:w-full max-sm:px-5">
        <h1 className="font-extrabold text-2xl">Let’s discuss your Project</h1>
        <p className="my-5 text-xs text-gray-500">
          There are many variations of passages of Lorem Ipsu available. but the
          majority have suffered alte.
        </p>
        <div className="flex mb-5 dark:hover:bg-bgdark hover:shadow-xl w-72 hover:bg-white hover:scale-110 transition duration-1000 hover:rounded">
          <div className="p-3">
            <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white hover:border-[#BC5ABA] mr-3 transition duration-1000">
              <FaRegAddressCard/>
            </button>
          </div>
          <div className="p-3 text-xs">
            <p>Adress</p>
            <p className="font-bold">Dschang, Brasserie</p>
          </div>
        </div>
        <div className="flex mb-5 w-72 hover:shadow-xl hover:bg-white dark:hover:bg-bgdark hover:rounded hover:scale-110 transition duration-1000">
          <div className="p-3">
            <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] transition duration-1000">
              <FaMailBulk/>
            </button>
          </div>
          <div className="p-3 text-xs">
            <p>Adress</p>
            <p className="font-bold">Dschang, Brasserie</p>
          </div>
        </div>
        <div className="flex mb-5 w-72 hover:shadow-xl hover:bg-white dark:hover:bg-bgdark hover:rounded hover:scale-110 transition duration-1000">
          <div className="p-3">
            <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] transition duration-1000">
              <FaPhone/>
            </button>
          </div>
          <div className="p-3 text-xs font-medium">
            <p>Adress</p>
            <p>
              <b>Dschang, Brasserie</b>
            </p>
          </div>
        </div>
        <div className="flex">
          <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] transition duration-1000">
            <FaFacebookF/>
          </button>
          <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] transition duration-1000">
          <FaTwitter/>
          </button>
          <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] transition duration-1000">
          <FaGithub/>
          </button>
          <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] transition duration-1000">
          <FaLinkedinIn/>
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
              className="block w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
            <button className="dark:bg-dark border-white px-4 py-2 rounded text-sm mr-10 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center transition duration-1000">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
