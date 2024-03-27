import React, { useContext } from "react";
import { BooksData } from "./Home";
import Book from "./Book";

const Books = () => {
  const bookData = useContext(BooksData);
  // console.log(bookData.length)
  return (
    <div className="w-[87%] mx-auto">
      <h1 className="lg:text-4xl text-2xl text-center font-bold lg:mt-[100px] mt-8">
        Books
      </h1>
      <div className="grid lg:grid-cols-3 gap-3 lg:gap-6 mt-4 lg:mt-12">
        {bookData.map((book) => (
          <Book key={bookData.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
