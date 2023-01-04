import React from "react";

export default function Idea() {
  return (
    <section className="bg-[#422E7B] dark:bg-bgdark px-20 py-10 text-white max-sm:px-5 dark:bg-dark">
      <div className="flex flex-col items-center my-5 animate-wave ">
        <h1 className="w-1/2 text-3xl text-center max-xs:w-full max-sm:w-4/5 max-lg:w-3/4 font-bold">
          Avez-vous une idée de projet ? Discutons de votre projet !
        </h1>
        <p className="w-1/2 text-xs text-center my-5 max-xs:w-full max-sm:w-4/5 max-lg:w-3/4">
          Vous pouvez me contacter sur WhatsApp pour qu'ensemble nous puissions
          concrétiser ce merveilleux projet
        </p>
        <div className="ml-10 text-center">
          <button 
          className="dark:bg-dark border-[#BC5ABA] px-4 py-2 transition duration-1000 rounded mr-10 bg-[#BC5ABA] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center"
          onClick={() => window.open("https://wa.me/237699665914")} >
            Discutons
          </button>
        </div>
      </div>
    </section>
  );
}
