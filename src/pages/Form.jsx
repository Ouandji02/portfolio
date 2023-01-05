import { sendForm } from "@emailjs/browser";
import React from "react";
import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
  FaRegAddressCard,
  FaTwitter,
} from "react-icons/fa";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [display, setDisplay] = useState(false);
  const sendMail = (e) => {
    setLoading(true);
    e.preventDefault();
    sendForm(
      "service_0jvqtmv",
      "template_oyhvf3s",
      e.target,
      "user_xbCxtpUwJQMVgWuGJWxfI"
    )
      .then((emailJSResponse) => {
        setDisplay(true);
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => {
        setDisplay(true);
        setSuccess(false);
        setLoading(false);
      });
  };
  return (
    <div className="relative top-[150px] bg-white dark:bg-bgdark flex justify-center p-10 rounded shadow-lg max-md:px-5 max-md:flex-wrap max-sm:w-full">
      <div className="mr-5 max-md:w-3/4 max-xs:text-sm max-sm:w-full max-sm:px-5">
        <h1 className="font-extrabold text-2xl">Discutons de votre projet</h1>
        <p className="my-5 text-xs text-gray-500">
          Voici l'ensemble des informations vous permettant de me contacter pour
          un echange
        </p>
        <div className="flex mb-5 dark:hover:bg-bgdark hover:shadow-xl w-72 hover:bg-white hover:scale-110 transition duration-1000 hover:rounded">
          <div className="p-3">
            <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white hover:border-[#BC5ABA] mr-3 transition duration-1000">
              <FaRegAddressCard />
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
              <FaMailBulk />
            </button>
          </div>
          <div className="p-3 text-xs">
            <p>Email</p>
            <p className="font-bold">ouandjithierry00@gmail.com</p>
          </div>
        </div>
        <div className="flex mb-5 w-72 hover:shadow-xl hover:bg-white dark:hover:bg-bgdark hover:rounded hover:scale-110 transition duration-1000">
          <div className="p-3">
            <button className="px-4 py-2 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] transition duration-1000">
              <FaPhone />
            </button>
          </div>
          <div className="p-3 text-xs font-medium">
            <p>Phone</p>
            <p>
              <b>(+237) 699665914/676186440</b>
            </p>
          </div>
        </div>
        <div className="flex">
          <a href="https://web.facebook.com/thierry.ouandji.7">
            <button className="text-gray-600 px-2 py-2 hover:scale-125 transition duration-1000 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] ">
              <FaFacebookF size={20} />
            </button>
          </a>
          <a href="https://twitter.com/YDOL2002">
            <button className="text-gray-600 px-2 py-2 hover:scale-125 transition duration-1000 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] ">
              <FaTwitter size={20} />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/thierry-ouandji-1b2274212/">
            <button className="text-gray-600 px-2 py-2 hover:scale-125 transition duration-1000 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] ">
              <FaLinkedinIn size={20} />
            </button>
          </a>
          <a href="https://github.com/Ouandji02">
            <button className="text-gray-600 px-2 py-2 hover:scale-125 transition duration-1000 hover:bg-[#BC5ABA] hover:text-white mr-3 hover:border-[#BC5ABA] ">
              <FaGithub size={20} />
            </button>
          </a>
        </div>
      </div>
      <div className="w-1/2 text-gray-500 text-xs ml-15 mt-5 max-md2:w-3/4 max-xs:w-full max-xs:px-5 max-md2:ml-0 pt-5">
        <p>
          Grace à ce formulaire vous pourrez me faire part de votre
          preoccupation
        </p>
        <form action="" onSubmit={sendMail}>
          <div className="relative z-0 w-full group my-8">
            <input
              type="text"
              name="name"
              id="name"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="name"
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
              type="number"
              name="number"
              id="number"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="number"
              className="peer-focus:font-medium absolute top-[50px] text-sm text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Phone
            </label>
          </div>
          <div className="relative z-0 w-full group my-8">
            <input
              type="text"
              name="subjet"
              id="subjet"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="sujet"
              className="peer-focus:font-medium absolute top-[50px] text-sm text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              sujet
            </label>
          </div>
          <div className="relative z-0 w-full group my-8">
            <textarea
              type="text"
              name="message"
              id="message"
              className="block  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:borer-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute top-[50px] text-sm text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
            >
              Message
            </label>
          </div>
          <div>
            {display ? (
              <div
                class={
                  success
                    ? "p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-gray-800 dark:text-green-400"
                    : "p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
                }
                role="alert"
              >
                {success ? (
                  <>
                    <span class="font-medium">Message de success!</span> Votre
                    message a été bien envoyé{" "}
                  </>
                ) : (
                  <>
                    <span class="font-medium">Message d'erreur!</span> Votre
                    message n'a pas été envoyé
                  </>
                )}
              </div>
            ) : null}

            <button
              type="submit"
              className="flex items-center dark:bg-dark border-white px-4 py-2 rounded text-sm mr-10 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center transition duration-1000"
            >
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#BC5ABA]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : null}
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
