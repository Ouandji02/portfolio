import React from "react";
import img2 from "../assets/images/portfolio/agenda1.jpg";
import img3 from "../assets/images/portfolio/agenda2.jpg";
import img4 from "../assets/images/portfolio/Tchat.jpg";
import img5 from "../assets/images/portfolio/payment.jpg";
import img6 from "../assets/images/portfolio/unikeza.jpg";
import img9 from "../assets/images/portfolio/unikeza2.jpg";
import img7 from "../assets/images/portfolio/unnamed (2).webp";
import img8 from "../assets/images/portfolio/unnamed (3).webp";

export default function Portfolio() {
  const projects = [
    {
      image: img7,
      image2: img8,
      categorie: "ENTREPRISE",
      name: "TGV'AIRWABO",
      description:
        "Cette une application mobile permettant le suivi d'un colis de la france au cameroun et vice versa",
      type: "PLAY STORE",
      link:"https://play.google.com/store/apps/details?id=com.unikeza.suivico.tgvairwabo"
    },
    {
      image: img2,
      image2: img3,
      categorie: "PERSONNEL",
      name: "AGENDA",
      description:
        "C̀est une application mobile qui permet de noter la liste de ses taches à réqliser dans un intervalle de temps",
      type: "GITHUB",
      link:"https://github.com/Ouandji02/agenda"
    },
    {
      image: img5,
      image2: img5,
      categorie: "PERSONNEL",
      name: "SYSTEME DE PAIEMENT",
      description:
        "C'est une application mobile qui permet d'effectuer les paiements en ligne grace à stripe",
      type: "GITHUB",
      link:"https://github.com/Ouandji02/payment-sysem"
    },
    {
      image: img4,
      image2: img4,
      categorie: "PERSONNEL",
      name: "Application de TCHAT",
      description:
        "Elle permettra à deux personnes de sse changer des messages grace à leur smartphone",
      type: "GITHUB",
      link:"https://play.google.com/store/apps/details?id=com.unikeza.suivico.tgvairwabo"
    },
    {
      image: img2,
      image2: img8,
      categorie: "PERSONNEL",
      name: "TEEMES",
      description:
        "Cette application mobile permettant à des personnes de localiser les pharmacie et hopitaux proche d'eux",
      type: "GITHUB",
      link:"https://github.com/Ouandji02/HannielMobile"
    },
    {
      image: img6,
      image2: img9,
      categorie: "ENTREPRISE",
      name: "UNIKEZA",
      description:
        "C'est un site web (landing page) présentant l'entreprise unikeza et ses services",
      type: "SITE",
      link:"https://unikeza.com/"
    },
  ];

  return (
    <section className="px-20 py-20 bg-white max-sm:px-5 dark:bg-dark text-gray-700">
      <div className="min-h-screen animate-wave ">
        <h1 className="text-3xl text-center font-extrabold">Portfolio</h1>
        <div className="flex justify-center my-5">
          <p className="text-xs text-gray-700 text-center w-1/3 max-sm:w-full max-sm:w-full max-lg:w-3/4">
            J'ai eu à réaliser plusieurs projets et parmi lesquels, voici les plus
            importants qui sont publiables
          </p>
        </div>
        <div className="flex justify-around flex-wrap">
          {projects.map((projet, key) => (
            <div
              className="rounded shadow w-72 text-xs mb-10 dark:bg-[#1E293B]"
              key={key}
            >
              <div className="flex">
                <img
                  src={projet.image}
                  alt=""
                  width={150}
                  className="h-72 hover:scale-125 transition duration-1000"
                />
                <img
                  src={projet.image2}
                  alt=""
                  width={150}
                  className="h-72 hover:scale-125 transition duration-1000"
                />
              </div>

              <div className="px-5 pt-5">
                <div className="text-gray-700">
                  <p className="text-gray-700">{projet.categorie}</p>
                  <h1 className="font-extrabold text-sm ">{projet.name}</h1>
                </div>
                <p className="my-5">{projet.description}</p>
                <button onClick={()=> window.open(projet.link)} className="dark:bg-dark px-2 py-2 transition duration-1000 top-5 relative bg-white text-[#BC5ABA] border-[#BC5ABA] font-extrabold hover:border-[#422E7B] hover:text-[#422E7B] rounded">
                  {projet.type}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-10">
          <button className="dark:bg-dark border-white px-2 py-2 transition duration-1000 rounded mr-10 bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] font-extrabold max-sm:mb-5 max-sm:justify-center ">
            More Projet
          </button>
        </div> */}
      </div>
    </section>
  );
}
