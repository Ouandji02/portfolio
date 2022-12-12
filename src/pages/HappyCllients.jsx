import React from 'react'
import google from "../assets/images/google.png"
import dribbble from "../assets/images/dribbble.png"
import amazon from "../assets/images/amazon.png"
import spotify from "../assets/images/spotify.png"
import medium from "../assets/images/medium.png"
import linkedin from "../assets/images/linkedin.png"
export default function HappyCllients() {
  return (
    <section>
        <h1 className="text-3xl text-center font-extrabold">Happy clients</h1>
        <div className="animate-wave flex justify-center my-5">
          <p className="text-xs text-gray-500 text-center w-1/2 max-xs:w-full max-sm:w-4/5 max-lg:w-3/4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className='mb-10 flex justify-center flex-wrap'>
            <img src={google} alt="" />
            <img src={dribbble} alt="" />
            <img src={amazon} alt="" />
            <img src={linkedin} alt="" />
            <img src={medium} alt="" />
        </div>
    </section>
  )
}
