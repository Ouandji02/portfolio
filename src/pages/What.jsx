import React from "react";

export default function What() {
  const skills = [
    {
      name: "Experience utilisateur (UX)",
      description:
        "C'est la globalité de l'interaction de l'utilisateur qui s'appuie aussi bien sur l'utilisabilité d'une interface que sur l'impact émotionnel ressenti",
    },
    {
      name: "Developpement mobile",
      description:
        "c'est la création et la diffusion d'applications portables, destinées aux entreprises ou aux particuliers, dans le respect d'une charte de fiabilité et de sécurité stricte.",
    },
    {
      name: "Developpement web",
      description:
        "C'est l'ensemble des processus qui permettent la création des sites web et applications web.",
    },
  ];
  return (
    <section className="px-20 py-10 bg-gray-100 max-sm:px-5 dark:bg-dark text-gray-700">
      <div className="animate-wave  min-h-screen flex justify-around items-center flex-wrap max-md2:w-full">
        <div className="text-gray-700 w-2/5 max-xs:w-full max-sm:w-4/5 max-lg:w-3/4 text-center">
          <h1 className="font-extrabold text-center text-3xl">
            Qu'est ce que je fais ?
          </h1>
          <p className="text-xs mt-5 my-3">
            Le développement de logiciel consiste à étudier, concevoir,
            construire, transformer, mettre au point, maintenir et améliorer des
            logiciels.
          </p>
          <p className="text-xs mb-5">
            Ainsi en tant que developpeur, j'effectue toutes les taches qui
            permettent la creation de logiciel
          </p>
          {/*  <button className="dark:bg-dark border-white px-4 py-2 transition duration-1000 rounded mr-10 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center ">
            My projet
          </button> */}
        </div>
        <div className="flex flex-col justify-around text-gray-700 w-2/5 max-md:w-full">
          {skills.map((skill, key) => (
            <div key={key} className="dark:bg-bgdark bg-white rounded shadow-md p-5 hover:border-l-4 hover:border-[#BC5ABA] my-2 transition duration-1000">
              <h1 className="text-xl font-bold ">{skill.name}</h1>
              <p className="mt-5 text-xs">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
