import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="hero min-h-screen flex items-center bg-no-repeat bg-cover bg-center relative after:block after:absolute after:w-full after:h-1/4 after:bottom-0"
      >
        <main className="content">
          <h1 className="text-putihtulisan leading-tight">
            Mari Nikmati Secangkir <span className="text-primary">Kopi</span>
          </h1>
          <p className="text-2xl mt-4 leading-snug font-thin mix-blend-difference">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae, dolores?
          </p>
          <NavLink
            className="cta mt-4 inline-block py-4 px-10 text-putihtulisan bg-primary rounded-lg hover:bg-amber-900"
            to="/menu"
          >
            Beli Sekarang!
          </NavLink>
        </main>
      </section>
    </>
  );
}
