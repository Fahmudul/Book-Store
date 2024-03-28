import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [active, setActive] = useState(0);
  const getOptionValue = () => {
    let optionName = document.getElementById("list").value;
    console.log(optionName);
  };
  return (
    <>
      <div className="w-[87%] mx-auto ">
        <h1 className="lg:text-4xl  text-2xl flex items-center justify-center font-bold lg:mt-[100px] mt-8 rounded-2xl h-[50px] lg:h-[100px] bg-[#f3f3f3]">
          Books
        </h1>
        <div className="border-2 flex justify-center items-center text-lg">Sort by : 
          <select id="list" onChange={() => getOptionValue()} className="ml-2 border-2 px-3 flex justify-center item py-2 bg-[#23BE0A] text-white border-none rounded-xl outline-none text-lg font-semibold">
            <option value="default">Default</option>
            <option value="fantasy">Fantasy</option>
            <option value="mystery">Mystery</option>
            <option value="young">Young Adult</option>
          </select>
        </div>
        <div className="flex mt-6 w-full items-center overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-100 dark:text-gray-800 border-b-2">
          <Link
            to=""
            onClick={() => setActive(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              active === 0
                ? "border border-b-0 rounded-lg"
                : "border-b dark:border-gray-600 dark:text-gray-600 rounded-lg"
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            to="wishlist"
            onClick={() => setActive(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              active === 1
                ? "border border-b-0 rounded-lg"
                : "border-b dark:border-gray-600 dark:text-gray-600 rounded-lg"
            } `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default ListedBooks;
