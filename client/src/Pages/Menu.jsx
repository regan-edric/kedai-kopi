import React, { useEffect, useRef } from "react";
import Expresso from "../Image/Menu/expresso.jpg";
import { FaEye, FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Rekomen1 from "../Image/Menu/rekomendasi-1.jpg";
import { IoMdClose } from "react-icons/io";
import Rekomendai1 from "../Image/Menu/rekomendasi-1.jpg";

export default function Menu() {
  const detailBtn1 = useRef(null);
  const detailBtn2 = useRef(null);
  const detailBtn3 = useRef(null);
  const detailBtn4 = useRef(null);
  const itemDetail = useRef(null);
  const closeIcon = useRef(null);

  useEffect(() => {
    const showModal = (e) => {
      if (itemDetail.current) {
        itemDetail.current.style.display = "flex";
        e.preventDefault();
      }
    };

    const closeModal = (e) => {
      if (itemDetail.current && closeIcon.current) {
        itemDetail.current.style.display = "none";
        e.preventDefault();
      }
    };

    const detailBtn1Current = detailBtn1.current;
    const detailBtn2Current = detailBtn2.current;
    const detailBtn3Current = detailBtn3.current;
    const detailBtn4Current = detailBtn4.current;
    const closeIconCurrent = closeIcon.current;

    if (
      detailBtn1Current &&
      detailBtn2Current &&
      detailBtn3Current &&
      detailBtn4Current
    ) {
      detailBtn1Current.addEventListener("click", showModal);
      detailBtn2Current.addEventListener("click", showModal);
      detailBtn3Current.addEventListener("click", showModal);
      detailBtn4Current.addEventListener("click", showModal);
    }

    if (closeIconCurrent) {
      closeIconCurrent.addEventListener("click", closeModal);
    }

    return () => {
      if (
        detailBtn1Current &&
        detailBtn2Current &&
        detailBtn3Current &&
        detailBtn4Current
      ) {
        detailBtn1Current.removeEventListener("click", showModal);
        detailBtn2Current.removeEventListener("click", showModal);
        detailBtn3Current.removeEventListener("click", showModal);
        detailBtn4Current.removeEventListener("click", showModal);
      }

      if (closeIconCurrent) {
        closeIconCurrent.removeEventListener("click", closeModal);
      }
    };
  }, []);


  return (
    <>
      <section id="menu" className="menu">
        <h2 className="text-center text-5xl mb-4">
          <span className="text-primary">Menu</span> Kami
        </h2>
        <p className="text-center font-thin max-w-lg m-auto leading-relaxed max-md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet
          nulla autem sunt blanditiis natus?
        </p>

        {/* Rekomendasi Products */}
        <section className="products" id="products">
          <h2 className="text-center text-2xl mb-4">
            <span className="text-primary">Menu</span> Unggulan Kami
          </h2>
          <p className="text-center font-thin m-auto leading-relaxed text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            voluptatum, porro incidunt alias optio iste.
          </p>

          <div className="row grid grid-cols-autofitmenu gap-6 mt-16 justify-center">
            <div className="product-card text-center text-2xl justify-center items-center border-solid border-2 border-gray-400 p-8">
              <div className="product-icons flex justify-center text-center items-center gap-2">
                <NavLink className="w-16 h-16 text-putihtulisan m-2 border-2 border-solid border-gray-400 rounded-full flex justify-center items-center hover:bg-primary hover:border-2 hover:border-solid hover:border-gray-400">
                  <FaShoppingCart />
                </NavLink>
                <NavLink
                  ref={detailBtn1}
                  className="w-16 h-16 text-putihtulisan m-2 border-2 border-solid border-gray-400 rounded-full flex justify-center items-center hover:bg-primary hover:border-2 hover:border-solid hover:border-gray-400"
                >
                  <FaEye />
                </NavLink>
              </div>
              <div className="product-image py-4 px-0">
                <img className=" h-96 mx-auto" src={Rekomen1} alt="Product-1" />
              </div>
              <div className="product-content">
                <h3 className="text-2xl">Coffee Beans</h3>
                <div className="product-stars text-primary p-3 mt-4 mb-4 flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className=" text-white" />
                </div>
                <div className="product-price text-xl font-bold">
                  IDR 35K{" "}
                  <span className=" line-through font-light text-base">
                    IDR 55K
                  </span>
                </div>
              </div>
            </div>
            <div className="product-card text-center text-2xl justify-center items-center border-solid border-2 border-gray-400 p-8">
              <div className="product-icons flex justify-center text-center items-center gap-2">
                <NavLink className="w-16 h-16 text-putihtulisan m-2 border-2 border-solid border-gray-400 rounded-full flex justify-center items-center hover:bg-primary hover:border-2 hover:border-solid hover:border-gray-400">
                  <FaShoppingCart />
                </NavLink>
                <NavLink
                  ref={detailBtn2}
                  className="detail-btn w-16 h-16 text-putihtulisan m-2 border-2 border-solid border-gray-400 rounded-full flex justify-center items-center hover:bg-primary hover:border-2 hover:border-solid hover:border-gray-400"
                >
                  <FaEye />
                </NavLink>
              </div>
              <div className="product-image py-4 px-0">
                <img className=" h-96 mx-auto" src={Rekomen1} alt="Product-1" />
              </div>
              <div className="product-content">
                <h3 className="text-2xl">Coffee Beans</h3>
                <div className="product-stars text-primary p-3 mt-4 mb-4 flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className=" text-white" />
                </div>
                <div className="product-price text-xl font-bold">
                  IDR 35K{" "}
                  <span className=" line-through font-light text-base">
                    IDR 55K
                  </span>
                </div>
              </div>
            </div>
            <div className="product-card text-center text-2xl justify-center items-center border-solid border-2 border-gray-400 p-8">
              <div className="product-icons flex justify-center text-center items-center gap-2">
                <NavLink className="w-16 h-16 text-putihtulisan m-2 border-2 border-solid border-gray-400 rounded-full flex justify-center items-center hover:bg-primary hover:border-2 hover:border-solid hover:border-gray-400">
                  <FaShoppingCart />
                </NavLink>
                <NavLink
                  ref={detailBtn3}
                  className="w-16 h-16 text-putihtulisan m-2 border-2 border-solid border-gray-400 rounded-full flex justify-center items-center hover:bg-primary hover:border-2 hover:border-solid hover:border-gray-400"
                >
                  <FaEye />
                </NavLink>
              </div>
              <div className="product-image py-4 px-0">
                <img className=" h-96 mx-auto" src={Rekomen1} alt="Product-1" />
              </div>
              <div className="product-content">
                <h3 className="text-2xl">Coffee Beans</h3>
                <div className="product-stars text-primary p-3 mt-4 mb-4 flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className=" text-white" />
                </div>
                <div className="product-price text-xl font-bold">
                  IDR 35K{" "}
                  <span className=" line-through font-light text-base">
                    IDR 55K
                  </span>
                </div>
              </div>
            </div>
            <div className="product-card text-center text-2xl justify-center items-center border-solid border-2 border-gray-400 p-8">
              <div className="product-icons flex justify-center text-center items-center gap-2">
                <NavLink className="w-16 h-16 text-putihtulisan m-2 border-2 border-solid border-gray-400 rounded-full flex justify-center items-center hover:bg-primary hover:border-2 hover:border-solid hover:border-gray-400">
                  <FaShoppingCart />
                </NavLink>
                <NavLink
                  ref={detailBtn4}
                  className="w-16 h-16 text-putihtulisan m-2 border-2 border-solid border-gray-400 rounded-full flex justify-center items-center hover:bg-primary hover:border-2 hover:border-solid hover:border-gray-400"
                >
                  <FaEye />
                </NavLink>
              </div>
              <div className="product-image py-4 px-0">
                <img className=" h-96 mx-auto" src={Rekomen1} alt="Product-1" />
              </div>
              <div className="product-content">
                <h3 className="text-2xl">Coffee Beans</h3>
                <div className="product-stars text-primary p-3 mt-4 mb-4 flex gap-2 justify-center items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className=" text-white" />
                </div>
                <div className="product-price text-xl font-bold">
                  IDR 35K{" "}
                  <span className=" line-through font-light text-base">
                    IDR 55K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="row flex flex-wrap mt-20 justify-center gap-4">
          <div className="menu-card text-center pb-16">
            <img
              className="menu-card-img rounded-full w-64 h-64 object-cover mx-auto"
              src={Expresso}
              alt="ini menu expresso"
            />
            <h3 className="menu-card-title mt-4 mx-auto mb-2">- Expresso -</h3>
            <p className="menu-card-price">Rp. 15.000,-</p>
          </div>
          <div className="menu-card text-center pb-16">
            <img
              className="menu-card-img rounded-full w-64 h-64 object-cover mx-auto"
              src={Expresso}
              alt="ini menu expresso"
            />
            <h3 className="menu-card-title mt-4 mx-auto mb-2">- Expresso -</h3>
            <p className="menu-card-price">Rp. 15.000,-</p>
          </div>
          <div className="menu-card text-center pb-16">
            <img
              className="menu-card-img rounded-full w-64 h-64 object-cover mx-auto"
              src={Expresso}
              alt="ini menu expresso"
            />
            <h3 className="menu-card-title mt-4 mx-auto mb-2">- Expresso -</h3>
            <p className="menu-card-price">Rp. 15.000,-</p>
          </div>
          <div className="menu-card text-center pb-16">
            <img
              className="menu-card-img rounded-full w-64 h-64 object-cover mx-auto"
              src={Expresso}
              alt="ini menu expresso"
            />
            <h3 className="menu-card-title mt-4 mx-auto mb-2">- Expresso -</h3>
            <p className="menu-card-price">Rp. 15.000,-</p>
          </div>
          <div className="menu-card text-center pb-16">
            <img
              className="menu-card-img rounded-full w-64 h-64 object-cover mx-auto"
              src={Expresso}
              alt="ini menu expresso"
            />
            <h3 className="menu-card-title mt-4 mx-auto mb-2">- Expresso -</h3>
            <p className="menu-card-price">Rp. 15.000,-</p>
          </div>
          <div className="menu-card text-center pb-16">
            <img
              className="menu-card-img rounded-full w-64 h-64 object-cover mx-auto"
              src={Expresso}
              alt="ini menu expresso"
            />
            <h3 className="menu-card-title mt-4 mx-auto mb-2">- Expresso -</h3>
            <p className="menu-card-price">Rp. 15.000,-</p>
          </div>
        </div>
      </section>

      {/* Ini bagian Modal */}
      <div
        className="modal hidden fixed z-full top-0 w-full h-full overflow-auto bg-hitamTransparan"
        id="item-detail"
        ref={itemDetail}
      >
        <div className="modal-container relative bg-putihtulisan text-black m-auto p-5 border-solid border-2 border-gray-400 w-5/6">
          <NavLink
            ref={closeIcon}
            to="/"
            className="close-icon absolute right-4 text-4xl hover:text-primary"
          >
            <IoMdClose />
          </NavLink>
          <div className="modal-content flex flex-nowrap max-md:flex-wrap">
            <img
              className="h-80 mr-8 mb-8"
              src={Rekomendai1}
              alt="ini modal 1"
            />
            <div className="product-content">
              <h3 className="text-4xl mb-5">Product 1</h3>
              <p className="text-xl leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                delectus omnis perferendis, recusandae ipsam ad voluptatum
                facere quaerat velit sunt eos ut saepe, sed eum?
              </p>
              <div className="product-stars text-primary p-3 mt-4 mb-4 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className=" text-black" />
              </div>
              <div className="product-price text-xl font-bold">
                IDR 35K{" "}
                <span className=" line-through font-light text-base">
                  IDR 55K
                </span>
              </div>
              <NavLink
                to="/cart"
                className="flex gap-4 w-48 bg-primary text-putihtulisan mt-4 py-4 px-7"
              >
                <FaShoppingCart /> <span>Add to Cart</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
