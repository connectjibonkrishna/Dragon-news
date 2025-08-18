import { FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  // Format date using native Intl API
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown date";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  };

  return (
    <div className="card bg-base-100 shadow-lg rounded-2xl overflow-hidden">
      {/* Author Info */}
      <div className="flex justify-between items-center p-4  bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {formatDate(author?.published_date)}
            </p>
          </div>
        </div>
        <div>
          <button className="btn btn-ghost btn-circle btn-sm">
            <FaRegBookmark size={16} className="text-gray-500" />
          </button>
          <button className="btn btn-ghost btn-circle btn-sm">
            <FaShareAlt size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      <h2 className="card-title text-lg p-4">{title}</h2>

      {/* Thumbnail */}
      <figure className="px-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full object-cover rounded-lg"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">
        <p className="text-sm text-gray-600 text-justify">
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
        </p>
        <button className="link link-primary text-sm mt-1 flex justify-start text-secondary">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-1 text-orange-500">
          {Array.from({ length: 5 }).map((_, idx) => (
            <AiFillStar
              key={idx}
              className={
                idx < rating.number ? "text-orange-500" : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 font-medium text-sm">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500 text-sm">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
