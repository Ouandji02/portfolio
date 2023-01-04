import React from "react";
import {
  FaChalkboard,
  FaChartBar,
  FaFileAlt,
  FaPenSquare,
} from "react-icons/fa";

export default function Process() {
  return (
    <section
      id="processus"
      className="px-20 bg-gray-100 my-auto max-lg:px-10 max-sm:px-5 z-[-1] dark:bg-dark text-gray-700"
    >
      <div className="animate-wave flex justify-center min-h-screen items-center pb-10 max-md2:flex-wrap max-md2:justify-center max-md2:pt-20 ">
        <div className="text-xs text-gray-700 w-2/3 max-md:max-w-48 max-sm:w-4/5 text-center max-sx:w-full ">
          <h1 className=" mb-5 font-extrabold text-3xl text-center font-extrabold">
            Processus de Travail
          </h1>
          <p className="py-3">
            Les processus de travail sont le ciment qui maintient l'ensemble et
            garantit que les tâches sont accomplies de manière systématique,
            organisée et en minimisant la possibilité d'échec. L'important avec
            les process, c'est qu'ils ne doivent pas être définis puis oubliés
          </p>
        </div>
        <div className="ml-20 mt-40 max-w-xl max-sm:ml-0 max-md:mt-10 flex flex-wrap max-lg:ml-2 max-md2:mt-10 max-xs2:justify-center max-sm:w-full">
          <div className="dark:bg-bgdark bg-white p-5 w-56 mb-2 rounded shadow-xl max-xs2:w-full hover:scale-125 transition duration-1000 max-sm:w-full">
            <div className="mb-5">
              <button className="hover:bg-[#BC5ABA] hover:text-white hover:border-[#BC5ABA] px-4 py-2">
                <FaFileAlt size={25} />
              </button>
            </div>
            <h1 className="mb-3 text-xl font-extrabold">1. Analyse</h1>
            <p className="text-gray-400 text-xs">
              C'est un ensemble de procédés permettant l'étude,la recherche et
              comprehension du problème(projet)
            </p>
          </div>
          <div className="dark:bg-bgdark bg-white p-5 w-56 mb-2 mt-2 ml-2 rounded shadow-xl max-xs2:w-full hover:scale-125 transition duration-1000  max-sm:w-full">
            <div className="mb-5">
              <button className="hover:bg-[#BC5ABA] hover:text-white hover:border-[#BC5ABA] px-4 py-2">
                <FaPenSquare size={25} />
              </button>
            </div>
            <h1 className="mb-3 text-lg font-extrabold">2. Conception</h1>
            <p className="text-gray-400 text-xs">
              C'est la phase pendant laquelle le projet est elaboré en
              respectant un certain formalisme informatique (langage de
              modelisation)
            </p>
          </div>
          <div className="dark:bg-bgdark bg-white p-5 w-56 mb-2 rounded shadow-xl max-xs2:w-full hover:scale-125 transition duration-1000 max-sm:w-full">
            <div className="mb-5">
              <button className="hover:bg-[#BC5ABA] hover:text-white hover:border-[#BC5ABA] px-4 py-2">
                <FaChartBar size={25} />
              </button>
            </div>
            <h1 className="mb-3 text-xl font-extrabold">3. Codage</h1>
            <p className="text-gray-400 text-xs">
              Dans cette phase on developpe une application repondant aux
              besoins spécifiques du projet
            </p>
          </div>
          <div className="dark:bg-bgdark bg-white p-5 w-56 ml-2 mt-1 rounded shadow-xl max-xs2:w-full hover:scale-125 transition duration-1000 max-sm:w-full">
            <div className="mb-5">
              <button className="hover:bg-[#BC5ABA] hover:text-white hover:border-[#BC5ABA] px-4 py-2">
                <FaChalkboard size={25} />
              </button>
            </div>
            <h1 className="mb-3 text-xl font-extrabold">
              4. Test et lancement
            </h1>
            <p className="text-gray-400 text-xs">
              Ici on se rassure que l'application respecte les specifications
              definis par le client et si tout est bon, on la lui livre
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
