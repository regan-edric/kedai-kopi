import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaTrash } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Expresso from "../Image/Menu/expresso.jpg";
import Menu1 from "../Image/Menu/rekomendasi-1.jpg";

export default function Navbar() {
  const navbarNavRef = useRef(null);
  const hamburgerMenuRef = useRef(null);
  const searchBtnRef = useRef(null);
  const searchFormRef = useRef(null);
  const searchBoxRef = useRef(null);
  const shopCart = useRef(null);
  const cartBtnRef = useRef(null);

  useEffect(() => {
    // ini untuk navbar extra di bagian toggle
    const toggleNav = () => {
      if (navbarNavRef.current && hamburgerMenuRef.current) {
        navbarNavRef.current.classList.toggle("active");
      }
    };

    const toggleCart = () => {
      if (shopCart.current && cartBtnRef.current) {
        shopCart.current.classList.toggle("active");
      }
    };

    const handleSearchClick = (e) => {
      if (searchBtnRef.current && searchFormRef.current) {
        searchFormRef.current.classList.toggle("active");
        searchBoxRef.current.focus();
        e.preventDefault();
      }
    };

    // ini untuk tutup ketika klik di luar
    const handleClickOutside = (e) => {
      if (
        navbarNavRef.current &&
        hamburgerMenuRef.current &&
        !navbarNavRef.current.contains(e.target) &&
        !hamburgerMenuRef.current.contains(e.target)
      ) {
        navbarNavRef.current.classList.remove("active");
      }
      if (
        searchBtnRef.current &&
        searchFormRef.current &&
        !searchBtnRef.current.contains(e.target) &&
        !searchFormRef.current.contains(e.target)
      ) {
        searchFormRef.current.classList.remove("active");
      }
      if (
        shopCart.current &&
        cartBtnRef.current &&
        !shopCart.current.contains(e.target) &&
        !cartBtnRef.current.contains(e.target)
      ) {
        shopCart.current.classList.remove("active");
      }
    };

    const hamburgerMenuRefCurrent = hamburgerMenuRef.current;
    const searchBtnRefCurrent = searchBtnRef.current;
    const cartBtnRefCurrent = cartBtnRef.current;

    if (hamburgerMenuRefCurrent) {
      hamburgerMenuRefCurrent.addEventListener("click", toggleNav);
    }
    if (searchBtnRefCurrent) {
      searchBtnRefCurrent.addEventListener("click", handleSearchClick);
    }
    if (cartBtnRefCurrent) {
      cartBtnRefCurrent.addEventListener("click", toggleCart);
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      if (hamburgerMenuRefCurrent) {
        hamburgerMenuRefCurrent.removeEventListener("click", toggleNav);
      }
      if (searchBtnRefCurrent) {
        searchBtnRefCurrent.removeEventListener("click", handleSearchClick);
      }
      if (cartBtnRefCurrent) {
        cartBtnRefCurrent.removeEventListener("click", toggleCart);
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar flex justify-between items-center border-b border-solid border-x-0 border-t-0 border-primary">
        <NavLink to="/" className="text-2xl font-bold text-putihtulisan">
          regan<span className="text-primary italic">senja</span>.
        </NavLink>

        <div
          ref={navbarNavRef}
          className="navbar-nav my-auto flex justify-center items-center max-md:block"
        >
          <NavLink
            className=" text-putihtulisan inline-block lg:text-xl sm:text-lg my-0 mx-4 hover:text-primary max-md:text-primary max-md:block max-md:m-5 max-md:p-2 max-md:text-2xl"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-putihtulisan inline-block lg:text-xl sm:text-lg my-0 mx-4 hover:text-primary max-md:text-primary max-md:block max-md:m-5 max-md:p-2 max-md:text-2xl"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="text-putihtulisan inline-block lg:text-xl sm:text-lg my-0 mx-4 hover:text-primary max-md:text-primary max-md:block max-md:m-5 max-md:p-2 max-md:text-2xl"
            to="/menu"
          >
            Menu
          </NavLink>
          <NavLink
            className="text-putihtulisan inline-block lg:text-xl sm:text-lg my-0 mx-4 hover:text-primary max-md:text-primary max-md:block max-md:m-5 max-md:p-2 max-md:text-2xl"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>

        <div className="navbar-extra flex justify-between items-center">
          <NavLink
            ref={searchBtnRef}
            className="text-putihtulisan my-0 mx-0.5 hover:text-primary"
            to="/"
            id="search-btn"
          >
            <FaSearch />
          </NavLink>
          <NavLink
            className="text-putihtulisan my-0 mx-0.5 hover:text-primary"
            to="/"
            id="shopping-cart-btn"
            ref={cartBtnRef}
          >
            <FaShoppingCart />
          </NavLink>
          <NavLink
            className="text-putihtulisan my-0 mx-0.5 hover:text-primary text-3xl inline-block md:hidden"
            id="hamburger-menu"
            ref={hamburgerMenuRef}
            to="/"
          >
            <MdMenu />
          </NavLink>
        </div>

        {/* Search Navbar */}
        <div
          ref={searchFormRef}
          className="search-form absolute top-full bg-white flex h-12 items-center max-md:w-4/5 max-md:right-8"
        >
          <input
            ref={searchBoxRef}
            type="search"
            id="search-box"
            className="h-full w-full p-4 text-xl text-black"
            placeholder="Search..."
          />
          <label
            htmlFor="search-box"
            className="cursor-pointer text-lg mr-6 text-black"
          >
            <FaSearch />
          </label>
        </div>

        {/* Shopping Cart */}
        <div
          ref={shopCart}
          className="shopping-cart absolute top-full -right-full h-screen w-96 py-0 px-6 text-black bg-putihtulisan"
        >
          <div className="cart-item my-8 mx-0 flex relative items-center gap-6 pb-4 border-x-0 border-t-0 border-y border-solid border-gray-500">
            <img className="h-24 rounded-full" src={Expresso} alt="cart-1" />
            <div className="item-detail">
              <h3 className="text-3xl pb-2">Product 1</h3>
              <div className="item-price text-xl">IDR 30K</div>
            </div>
            <FaTrash className="remove-item absolute right-4 cursor-pointer hover:text-primary" />
          </div>
          <div className="cart-item my-8 mx-0 flex relative items-center gap-6 pb-4 border-x-0 border-t-0 border-y border-solid border-gray-500">
            <img className="h-24 rounded-full" src={Menu1} alt="cart-1" />
            <div className="item-detail">
              <h3 className="text-3xl pb-2">Product 1</h3>
              <div className="item-price text-xl">IDR 30K</div>
            </div>
            <FaTrash className="remove-item absolute right-4 cursor-pointer hover:text-primary" />
          </div>
          <div className="cart-item my-8 mx-0 flex relative items-center gap-6 pb-4 border-x-0 border-t-0 border-y border-solid border-gray-500">
            <img className="h-24 rounded-full" src={Expresso} alt="cart-1" />
            <div className="item-detail">
              <h3 className="text-3xl pb-2">Product 1</h3>
              <div className="item-price text-xl">IDR 30K</div>
            </div>
            <FaTrash className="remove-item absolute right-4 cursor-pointer hover:text-primary" />
          </div>
        </div>
      </nav>
    </>
  );
}
