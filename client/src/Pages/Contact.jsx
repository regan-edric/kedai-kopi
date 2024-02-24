import React from "react";
import { FaMailBulk, FaPhone, FaUser } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <h2 className="text-center text-5xl mb-4">
          <span className="text-primary">Kontak </span>
          Saya
        </h2>
        <p className="text-center max-w-lg m-auto font-thin leading-relaxed max-md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          praesentium rerum eum, sapiente consectetur deserunt.
        </p>

        <div className="row flex mt-8 bg-primary max-md:flex-wrap">
          <iframe
            className="map w-full object-cover max-md:h-96"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9861746961224!2d98.6516419!3d3.590645400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fee6c85be5f%3A0x8ac519d71d01fef4!2sStarbucks%20Coffee%20Gatot%20Subroto%20Medan!5e0!3m2!1sid!2sid!4v1708360923879!5m2!1sid!2sid"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <form action="" className="py-20 px-8 text-center max-md:pt-0">
            <div className="input-group flex items-center mt-8 pl-8">
              <FaUser />
              <input
                type="text"
                required
                className="w-full p-4 text-2xl bg-transparent text-putihtulisan"
                placeholder="Nama..."
              />
            </div>
            <div className="input-group flex items-center mt-8 pl-8">
              <FaMailBulk />
              <input
                type="email"
                required
                className="w-full p-4 text-2xl bg-transparent text-putihtulisan"
                placeholder="Email..."
              />
            </div>
            <div className="input-group flex items-center mt-8 pl-8">
              <FaPhone />
              <input
                type="text"
                required
                className="w-full p-4 text-2xl bg-transparent text-putihtulisan"
                placeholder="No Hp..."
              />
            </div>
            <button
              type="submit"
              className="btn mt-12 inline-block py-4 px-12 text-2xl text-putihtulisan bg-amber-900 cursor-pointer rounded-full hover:bg-yellow-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
