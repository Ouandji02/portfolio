import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(1);
  console.log(currentSlide);
  const prev = () => {
    if (currentSlide > 1) {
      setCurrentSlide((current) => current - 1);
    }
  };

  const next = () => {
    const total = document.querySelector(".slider").childElementCount;
    if (currentSlide < total) {
      setCurrentSlide((current) => current + 1);
    }
  };

  const showSlide = () => {
    const total = document.querySelector(".slider").childElementCount;
    const slides = document.querySelector(".slider").querySelectorAll("li");
    for (let index = 0; index < total; index++) {
      const element = slides[index];
      if (currentSlide === index + 1) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    }
  };

  useEffect(() => {
    showSlide();
  }, [currentSlide]);

  const testimonials = [
    {
      profession: "PDG de UNIKEZA",
      name : "Patric GUIFO",
      text: "“Nous sommes toujours étonnés par vos accomplissements.Continuez à faire du bon travail ! Les entreprises rêvent de trouver des employés comme vous, merci pour votre dévouement.C'est incroyable de vous voir constamment placer la barre haut.”",
    },
    {
      profession: "Directeur technique de UNIKEZA",
      name : "ABOUDEM IDRICE",
      text: "“Lors du dernier quart de travail, tu as dû gérer plus de tâches en raison de l’absence de ton collègue et tu as relevé ce défi de manière impeccable. Bravo pour ton efficacité et merci de ta dévotion.”",
    },
    {
      profession: "Directrice générale de UNIKEZA",
      name : "SUMO MANUELA",
      text: "“Un employé sur lequel on peut compter est le meilleur cadeau que puisse demander un leader. Merci de votre grande fiabilité.”",
    },
  ];

  return (
    <section>
      <div className="relative">
        <div className="animate-wave">
          <h1 className="text-3xl text-center font-extrabold">Temoignages</h1>
        </div>
        <ul className="slider">
          {testimonials.map((testimonial, key) => (
            <li className={key === 0 ? "" : "hidden"} key={key}>
              <div className="flex flex-col items-center justify-center my-5">
                <p className="mt-10 w-1/2 max-xs:w-64 max-sm:w-4/5 max-lg:w-3/4 text-center">
                  {testimonial.text}
                </p>
                <p className="my-5 font-extrabold">{testimonial.name}</p>
                <p>{testimonial.profession}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="px-0 absolute flex  w-full h-full top-0 left-0">
          <div className="flex w-full justify-between my-auto z-[1] ">
            <button
              className="px-2 py-2 rounded-full bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] shadow-medium opacity-80"
              onClick={prev}
            >
              <FaAngleLeft />
            </button>
            <button
              className="px-2 py-2 rounded-full bg-[#422E7B] text-white hover:bg-white hover:text-[#BC5ABA] hover:border-[#BC5ABA] shadow-medium opacity-80"
              onClick={next}
            >
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
