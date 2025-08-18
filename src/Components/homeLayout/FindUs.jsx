import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-7">
      <h3 className="font-bold my-5">Find Us</h3>
      <div>
        <div className="join join-vertical w-full gap-3">
          <button className="btn join-item flex justify-start  bg-base-100">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn join-item flex justify-start  bg-base-100">
            <FaInstagram /> Instagram
          </button>
          <button className="btn join-item flex justify-start  bg-base-100">
            <FaTwitter></FaTwitter> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
