import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-primary text-center py-4 px-0 mt-12">
        <div className="socials py-4 px-0 flex justify-center items-center">
          <NavLink className="text-putihtulisan m-4 hover:text-black">
            <FaInstagram />
          </NavLink>
          <NavLink className="text-putihtulisan m-4 hover:text-black">
            <FaTiktok />
          </NavLink>
          <NavLink className="text-putihtulisan m-4 hover:text-black">
            <FaWhatsapp />
          </NavLink>
        </div>

        <div className="links mb-6 ">
          <NavLink className="text-putihtulisan m-4 hover:text-black py-3 px-4" to="/">Home</NavLink>
          <NavLink className="text-putihtulisan m-4 hover:text-black py-3 px-4" to="/about">About</NavLink>
          <NavLink className="text-putihtulisan m-4 hover:text-black py-3 px-4" to="/menu">Menu</NavLink>
          <NavLink className="text-putihtulisan m-4 hover:text-black py-3 px-4" to="/contact">Contact</NavLink>
        </div>

        <div className="credits text-sm">
          <p className="">
            Created by <NavLink className="text-black font-bold">reganedric</NavLink>. | &copy; 2024.
          </p>
        </div>
      </footer>
    </>
  );
}
