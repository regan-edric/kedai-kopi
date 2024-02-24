import React, { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import Rekomendai1 from "../Image/Menu/rekomendasi-1.jpg";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function ModalDetail() {
  const itemDetail = useRef(null);

  return (
    <>
      <div
        className="modal hidden fixed z-full top-0 w-full h-full overflow-auto bg-hitamTransparan"
        id="item-detail"
        ref={itemDetail}
      >
        <div className="modal-container relative bg-putihtulisan text-black m-auto p-5 border-solid border-2 border-gray-400 w-5/6">
          <NavLink to="/" className="absolute right-4 text-4xl">
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
