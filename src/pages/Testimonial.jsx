import React from "react";

export default function Testimonial() {
  return (
    <section>
      <h1 className="text-3xl text-center">Testimonial</h1>
      <div className="flex flex-col items-center justify-center my-5">
        <p className="text-xs text-gray-500 text-center w-1/2 text-gray-500 max-xs:w-full max-sm:w-4/5 max-lg:w-3/4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
        <p className="mt-10 w-1/2 max-xs:w-64 max-sm:w-4/5 max-lg:w-3/4">
          “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
          felis turpis, nec semper odio convallis at. Curabitur imperdiet semper
          arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas
          est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare
          elit at libero suscipit porta.”
        </p>
        <p className="my-5 font-extrabold">Ouandji Thierry</p>
        <p>Manger, gerant de projet</p>
      </div>
    </section>
  );
}
