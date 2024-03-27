import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getBooks, saveReadBook, saveWishListdBook } from "./localStorage";

const BookDetails = () => {
  
  const data = useLoaderData();
  const bookData = Object.values(JSON.parse(data));
  const { singlebookId } = useParams();
  const singleBook = bookData.find((book) => book.bookId == singlebookId);
  //   console.log(singleBook);
  const handleReadBook = (bookName) => {
    saveReadBook(bookName);
    // setReadBook(bookName);
  };
  const handleWishlistBook = (bookName) => {
    saveWishListdBook(bookName);
  };
  const {
    bookId,
    image,
    category,
    rating,
    tags,
    bookName,
    author,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleBook;
  return (
    <div className="w-[87%] mx-auto  flex flex-col lg:flex-row lg:gap-12 gap-5">
      <div className="w-full lg:w-[48%] lg:h-[850px] border-2 py-7 bg-[#f3f3f3] rounded-2xl">
        <img src={image} className="w-[80%] h-full mx-auto" alt="" />
      </div>
      <div className="w-full lg:w-[48%]">
        <h1 className="font-bold text-4xl">{bookName}</h1>
        <p className="text-xl mt-5">By : {author}</p>
        <div className="w-full h-1 border-2 border-[#dcdcdc] mb-4 mt-5"></div>
        <span className="text-xl">{category}</span>
        <div className="w-full h-1 border-2 border-[#dcdcdc] mb-6 mt-4"></div>
        <p>
          <span className="font-bold">Review :</span> <span></span>
          {review}
        </p>
        <div className="mt-12">
          Tag :
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="mr-2 w-32 px-4 py-2 bg-[#f4fcf3] text-[#23be0a] rounded-[30px]"
            >
              #{tag}
            </span>
          ))}
        </div>
        <div className="w-full h-1 border-2 border-[#dcdcdc] mb-6 mt-7"></div>
        <div className="w-full mb-8">
          <div className="flex">
            <p className="w-[30%]">Number of Pages:</p>
            <span className="font-semibold">{totalPages}</span>
          </div>
          <div className="flex">
            <p className="w-[30%]">Publisher:</p>
            <span className="font-semibold">{publisher}</span>
          </div>
          <div className="flex">
            <p className="w-[30%]">Year of Publishing:</p>
            <span className="font-semibold">{yearOfPublishing}</span>
          </div>
          <div className="flex">
            <p className="w-[30%]">Rating:</p>
            <span className="font-semibold">{rating}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => handleReadBook(singleBook)}
            className="btn border-2 bg-transparent border-[#b8b8b8] text-black w-[101px] h-[57px] flex items-center justify-center text-lg"
          >
            Read
          </button>
          <button
            onClick={() => handleWishlistBook(singleBook)}
            className="btn text-white bg-[#50b1c9] w-[128px] h-[57px] flex items-center justify-center text-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
