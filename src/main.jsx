import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Home from "./components/Home.jsx";
import ListedBooks from "./components/ListedBooks.jsx";
import BookDetails from "./components/BookDetails.jsx";
import ReadBooks from "./components/ReadBooks.jsx";
import WishListBook from "./components/WishListBooks.jsx";
import PagesToRead from "./components/PagesToRead.jsx";
import ArrivalBooks from "./components/ArrivalBooks.jsx";
import Review from "./components/Review.jsx";
import { Toaster } from "react-hot-toast";
import NotFound from "../NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/Fahmudul/book-info/main/info.json"
          ),
      },
      {
        path: "/book/:singlebookId",
        element: <BookDetails></BookDetails>,
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/Fahmudul/book-info/main/info.json"
          ),
      },
      {
        path: "/listedbooks/",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist",
            element: <WishListBook></WishListBook>,
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/arrivalbook",
        element: <ArrivalBooks></ArrivalBooks>,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster></Toaster>
  </React.StrictMode>
);
