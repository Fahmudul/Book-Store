import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, category, rating, tags, bookName, author } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      className="border-2 border-[#e4e4e4] rounded-2xl px-6 py-6"
    >
      <div className="w-[95%] mx-auto bg-[#f3f3f3] rounded-lg">
        <img
          src={image}
          className="h-52 lg:h-80 w-1/2 rounded-lg bg-[#f3f3f3] mx-auto"
          alt=""
        />
      </div>
      <div className="w-[95%] mx-auto">
        <div className="mt-6">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="mr-2 w-32 px-4 py-2 bg-[#f4fcf3] text-[#23be0a] rounded-[30px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="lg:text-2xl text-xl font-bold mt-4">{bookName}</h1>
        <p className="font-medium mt-4">By : {`${author}`}</p>
        <div className="w-full h-1 border-2 border-dashed border-gray-500 mb-5 mt-5"></div>
        <div className="flex justify-between ">
          <p>{category}</p>
          <span className="flex items-center gap-2">
            <p className="text-lg">{rating}</p>
            <FaRegStar className="text-lg" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Book;
