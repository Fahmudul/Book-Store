import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ReadingBook = ({ book }) => {
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  console.log(book);
  return (
    <div className="border-2 w-full flex flex-col lg:flex-row justify-between gap-4 lg:gap-6 p-2 lg:p-6">
      <div className="w-full lg:w-[300px] mx-auto lg:mx-0  rounded-3xl">
        <img
          src={image}
          className="h-[270px] lg:h-[320px] w-full mx-auto lg:mx-0 rounded-3xl"
          alt=""
        />
      </div>
      <div className="flex-grow">
        <h1 className="text-3xl font-bold lg:text-left text-center">{bookName}</h1>
        <p className="font-medium mt-4 mb-5 text-xl text-[#424242] lg:text-left text-center">
          By : {`${author}`}
        </p>
        <div className="font-bold mb-5 lg:mt-0 mt-4 flex items-center lg:flex-row flex-col">
          <div className="lg:mb-0 mb-7">
            Tag
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="mr-2 ml-2  px-4 py-2 bg-[#f4fcf3] text-[#23be0a] rounded-[30px]"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="flex items-center text-xl">
            <IoLocationOutline className="mr-3 text-2xl" /> Year of Publishing:{" "}
            {yearOfPublishing}
          </span>
        </div>
        <div className="flex lg:gap-4 mb-7">
          <div className="flex items-center w-44 lg:w-auto text-[#717171]">
            <svg
              className="mr-3"
              width="30.000000"
              height="19.000000"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <path
                id="Vector"
                d="M13 16.12C13.85 16.37 14.73 16.5 15.62 16.5C17.05 16.5 18.46 16.17 19.74 15.54C19.78 14.65 19.52 13.76 19.01 13.02C18.5 12.29 17.77 11.73 16.92 11.45C16.06 11.17 15.14 11.17 14.29 11.46C13.44 11.75 12.71 12.31 12.21 13.05M13 16.12C13 15.01 12.71 13.96 12.21 13.05C11.53 11.81 10.45 10.83 9.15 10.27C7.85 9.7 6.41 9.59 5.03 9.94C3.66 10.29 2.45 11.09 1.58 12.21C0.71 13.33 0.24 14.7 0.24 16.12L0.25 16.23C2.11 17.35 4.29 18 6.62 18C8.87 18 11.07 17.39 13 16.23L13 16.12L13 16.12ZM9.01 5.76C8.37 6.39 7.52 6.75 6.62 6.75C5.72 6.75 4.87 6.39 4.23 5.76C3.6 5.12 3.25 4.27 3.25 3.37C3.25 2.47 3.6 1.62 4.23 0.98C4.87 0.35 5.72 0 6.62 0C7.52 0 8.37 0.35 9.01 0.98C9.64 1.62 10 2.47 10 3.37C10 4.27 9.64 5.12 9.01 5.76ZM17.48 7.48C16.98 7.97 16.32 8.25 15.62 8.25C14.92 8.25 14.26 7.97 13.76 7.48C13.27 6.98 13 6.32 13 5.62C13 4.92 13.27 4.26 13.76 3.76C14.26 3.27 14.92 3 15.62 3C16.32 3 16.98 3.27 17.48 3.76C17.97 4.26 18.25 4.92 18.25 5.62C18.25 6.32 17.97 6.98 17.48 7.48Z"
                stroke="#131313"
                stroke-opacity="0.600000"
                stroke-width="1.500000"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Publisher: {author}
          </div>
          <div className="flex items-center text-[#717171]">
            <svg
              className="mr-3"
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip13_11212">
                  <rect
                    id="Frame"
                    width="24.000000"
                    height="24.000000"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Frame"
                width="24.000000"
                height="24.000000"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip13_11212)">
                <path
                  id="Vector"
                  d="M19.5 14.25L19.5 11.62C19.5 10.73 19.14 9.87 18.51 9.23C17.87 8.6 17.02 8.25 16.12 8.25L14.62 8.25C14.32 8.25 14.04 8.13 13.82 7.92C13.61 7.7 13.5 7.42 13.5 7.12L13.5 5.62C13.5 4.72 13.14 3.87 12.51 3.23C11.87 2.6 11.02 2.25 10.12 2.25L8.25 2.25M9 16.5L9 17.25M12 14.25L12 17.25M15 12L15 17.25M5.62 2.25C5 2.25 4.5 2.75 4.5 3.37L4.5 20.62C4.5 21.24 5 21.75 5.62 21.75L18.37 21.75C18.99 21.75 19.5 21.24 19.5 20.62L19.5 11.25C19.5 8.86 18.55 6.57 16.86 4.88C15.17 3.19 12.88 2.25 10.5 2.25L5.62 2.25Z"
                  stroke="#131313"
                  stroke-opacity="0.600000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
              </g>
            </svg>{" "}
            Page {totalPages}
          </div>
        </div>
        <div className="w-full h-1 border-2  border-[#dcdcdc] mb-9 mt-5"></div>
        <div className="flex gap-1 lg:gap-3 justify-between lg:justify-normal">
          <span className="flex items-center text-center lg:px-0 px-1 justify-center lg:w-36 bg-[#e0eeff] text-[#328eff] rounded-[30px]">
            Category: {category}
          </span>
          <span className="flex items-center justify-center text-center lg:w-32 bg-[#fff3e1] text-[#ffac33] rounded-[30px]">
            Rating: {rating}
          </span>
          <Link>
            <button className="btn lg:w-28 h-[20px] bg-[#23be0a] rounded-[30px] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadingBook;
