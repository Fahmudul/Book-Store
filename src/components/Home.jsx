import React, { createContext } from "react";
import Books from "./Books";
import { useLoaderData } from "react-router-dom";

export const BooksData = createContext();

const Home = () => {
  const data = useLoaderData();
  const bookData = JSON.parse(data);

  return (
    <>
      <div className="hero min-h-[600px] w-[87%] bg-[#f3f3f3] mx-auto border-2 border-red-500] rounded-3xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="../../public/Screenshot 2024-03-26 130657.png"
            className="lg:w-[400px] rounded-lg shadow-2xl"
          />
          <div className="mt-10 lg:mt-0">
            <h1 className="lg:text-6xl text-2xl font-bold w-full lg:w-[60%] lg:leading-[84px]">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn bg-[#23BE0A] mt-6 lg:mt-12 text-white font-bold text-lg h-[55px]">
              View The List
            </button>
          </div>
        </div>
      </div>
      <BooksData.Provider value={bookData}>
        <Books></Books>
      </BooksData.Provider>
    </>
  );
};

export default Home;
