import React from "react";
import html5 from "../assets/images/html5.svg";
import reactjs from "../assets/images/reactjs.svg";
import tailwindcss from "../assets/images/tailwindcss.svg";
import kotlin from "../assets/images/kotlin.svg";
import flutter from "../assets/images/flutter.svg";
import node from "../assets/images/node.svg";
import firebase from "../assets/images/firebase.svg";
export default function Technologies() {
  const logos = [html5, reactjs, tailwindcss, kotlin, flutter, node, firebase];
  return (
    <section className="text-gray-700">
      <h1 className="text-3xl text-center font-extrabold">
        Technologies que j'utilises
      </h1>
      <div className="animate-wave flex justify-center my-5">
        <p className="text-xs text-gray-500 text-center w-1/2 max-sm:w-full max-sm:w-4/5 max-lg:w-3/4">
          Pourla réalisation de mes différents projets, j'utilise une
          technologies specifiques repondant au besoin de l'application
        </p>
      </div>
      <div className="mb-10 flex justify-center flex-wrap">
        {logos.map((logo, key) => (
          <img src={logo} alt="logo" key={key} />
        ))}
      </div>
    </section>
  );
}
