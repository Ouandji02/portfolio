import React from "react";
import Form from "./Form";
import HappyCllients from "./HappyCllients";
import Testimonial from "./Testimonial";

export default function FinalSection() {
  return (
    <section className="bg-gradient-to-t from-white via-[#F9F0F9] to-white px-20 py-10 max-xs:px-5">
      <div className="min-h-screen flex flex-col items-center">
        <HappyCllients></HappyCllients>
        <Testimonial></Testimonial>
        <Form></Form>
      </div>
    </section>
  );
}
