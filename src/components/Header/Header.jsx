import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const link = (
    <>
      <li className="mr-4  px-5 py-3 text-lg rounded-lg">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="mr-4  px-5 py-3 text-lg rounded-lg">
        <NavLink to="/listedbooks">Listed Books</NavLink>
      </li>
      <li className="mr-4  px-5 py-3 text-lg rounded-lg">
        <NavLink to="/pagestoread">Pages to Read</NavLink>
      </li>
      <li className="mr-4  px-5 py-3 text-lg rounded-lg">
        <NavLink to="/arrivalbook">New Arrival</NavLink>
      </li>
      <li className="mr-4  px-5 py-3 text-lg rounded-lg">
        <NavLink to="/review">Review</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:w-[88%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl lg:text-3xl px-0">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="  menu-horizontal px-1 ">{link}</ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-[#23BE0A]   text-white font-bold text-lg mr-3">
          Sign In
        </a>
        <a className="btn bg-[#59c6d2] hidden lg:flex text-white font-bold text-lg ">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
