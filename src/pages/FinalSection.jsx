import React from "react";
import Form from "./Form";
import Technologies from "./Technologies";
import Testimonial from "./Testimonial";

export default function FinalSection() {
  return (
    <section className="text-gray-700 bg-gradient-to-t from-white via-[#F9F0F9] to-white px-20 py-10 max-sm:px-5 dark:from-dark">
      <div className="min-h-screen flex flex-col items-center">
        <Technologies></Technologies>
        <Testimonial></Testimonial>
        <Form></Form>
      </div>
    </section>
  );
}
