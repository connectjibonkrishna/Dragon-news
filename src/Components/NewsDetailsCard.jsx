import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
// import { useParams } from "react-router";
// import { useLoaderData } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  const { category_id, title, author, image_url, details } = news;
  //   console.log(news);
  //   console.log(title);
  // console.log(news.title);

  return (
    <div className="space-y-5">
      <h3 className="text-xl font-semibold">Dragon News | Details</h3>
      <img
        className="w-full object-cover max-h-96 rounded-lg"
        src={image_url}
        alt=""
      />
      <div>
        <p className="font-semibold">{title}</p>
        {/* <p>Author: {author}</p> */}
        <p>Author : {author.name}</p>
      </div>
      <p className="text-justify">{details}</p>
      <Link className="btn btn-secondary" to={`/category/${category_id}`}>
        <FaArrowLeft></FaArrowLeft> Back to Category News
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
