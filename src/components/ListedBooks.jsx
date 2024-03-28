import { createContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getBooks } from "./localStorage";

export const HandleOptionValue = createContext();
const ListedBooks = () => {
  const [readBook, setReadBook] = useState([]);
  const [displayReadBook, setDisplayReadBook] = useState([]);
  useEffect(() => {
    const readListBook = getBooks();

    setReadBook(readListBook);
    setDisplayReadBook(readListBook);
  }, []);

  const sortBooksByRatingDescending = (books, typeOfDescending) => {
    return books.sort((a, b) => b[typeOfDescending] - a[typeOfDescending]);
  };
  const handleBookFilter = (filter) => {
    if (filter === "default") {
      setDisplayReadBook(readBook);
    } else if (filter === "totalPages") {
      const sortedBooks = sortBooksByRatingDescending(
        [...readBook],
        "totalPages"
      );
      setDisplayReadBook(sortedBooks);
    } else if (filter === "rating") {
      const sortedBooks = sortBooksByRatingDescending([...readBook], "rating");
      setDisplayReadBook(sortedBooks);
    } else if (filter === "yearOfPublishing") {
      const sortedBooks = sortBooksByRatingDescending(
        [...readBook],
        "yearOfPublishing"
      );
      setDisplayReadBook(sortedBooks);
    }
  };

  const [active, setActive] = useState(0);
  const getOptionValue = () => {
    let optionValue = document.getElementById("list").value;

    handleBookFilter(optionValue);
  };

  return (
    <>
      <div className="w-[87%] mx-auto ">
        <h1 className="lg:text-4xl  text-2xl flex items-center justify-center font-bold lg:mt-[100px] mt-8 rounded-2xl h-[50px] lg:h-[100px] bg-[#f3f3f3]">
          Books
        </h1>
        <div className=" flex justify-center items-center text-lg mb-3 mt-3">
          Sort by :
          <select
            id="list"
            onChange={() => getOptionValue()}
            className="ml-2 border-2 px-3 flex justify-center item py-2 bg-[#23BE0A] text-white border-none rounded-xl outline-none text-lg font-semibold"
          >
            <option value="default">Default</option>
            <option value="totalPages">Total Pages</option>
            <option value="rating">Rating</option>
            <option value="yearOfPublishing">Publish Year</option>
          </select>
        </div>
        <div className="lg:w-[30%] w-full">
          <div role="tablist" className="tabs tabs-lifted">
            <Link
              to=""
              onClick={() => setActive(0)}
              className={`${active === 0 ? "tab text-xl" : "tab tab-active text-xl"}`}
            >
              Read Book
            </Link>
            <Link
              to="wishlist"
              onClick={() => setActive(1)}
              className={`${active === 0 ? "tab tab-active text-xl" : "tab text-xl"}`}
            >
              Wishlist
            </Link>
          </div>
        </div>
        <HandleOptionValue.Provider value={displayReadBook}>
          <Outlet></Outlet>
        </HandleOptionValue.Provider>
      </div>
    </>
  );
};

export default ListedBooks;
