import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center font-semibold gap-2 w-11/12 mx-auto bg-base-200 p-2 my-3">
      <p className="bg-secondary px-3 py-2 text-base-100">Latest</p>
      <Marquee speed={60} pauseOnHover={true}>
        <div className="flex gap-5">
          <p className="">
            1Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            molestias reiciendis ut placeat.
          </p>
          <p className="">
            2Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            molestias reiciendis ut placeat.
          </p>
          <p className="pr-5">
            3Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            molestias reiciendis ut placeat.
          </p>
          <p className="pr-5">
            4Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            molestias reiciendis ut placeat.
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
LatestNews;
