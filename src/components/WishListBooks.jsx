import { useEffect, useState } from "react";
import { getBooks, getWishListBooks } from "./localStorage";
import WishListBook from "./WishListBook";

const WishListBooks = () => {
  const [wishlistBook, setWishlistBook] = useState([]);

  useEffect(() => {
    const wishListBooks = getWishListBooks();
    setWishlistBook(wishListBooks);
  }, []);
  // console.log(wishlistBook);
  return (
    <div className="w-full mx-auto mt-4 lg:mt-8 flex flex-col gap-5">
      {wishlistBook.map((book) => (
        <WishListBook key={book.bookId} book={book}></WishListBook>
      ))}
    </div>
  );
};

export default WishListBooks;
