import React from "react";
import fotoAbout from "../Image/about-us.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="about p-6">
        <h2 className="text-center text-5xl mb-12">
          <span className="text-primary">About</span> Us
        </h2>

        <div className="row flex max-md:flex-wrap">
          <div className="about-img flex-about">
            <img
              className="w-full max-md:h-96 max-md:object-cover max-md:object-center"
              src={fotoAbout}
              alt="Foto secangkir kopi"
            />
          </div>
          <div className="content flex-contentabout py-0 px-4 max-md:p-0 ">
            <h3 className="text-3xl mb-4 max-md:mt-4 max-md:text-4xl">
              Kenapa memilih kopi kami?
            </h3>
            <p className="mb-3 text-xl font-thin leading-relaxed max-md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ad fugit asperiores minus voluptatum beatae?
            </p>
            <p className="mb-3 text-xl font-thin leading-relaxed max-md:text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              reprehenderit enim nulla laborum provident, pariatur asperiores
              repellat dolorum esse eligendi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
