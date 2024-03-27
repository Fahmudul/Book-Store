import { useEffect, useState } from "react";
import { getBooks } from "./localStorage";
import ReadingBook from "./ReadingBook";

const ReadBooks = () => {
  const [readBook, setReadBook] = useState([]);
  //     const [wishlistBook, setWishlistBook] = useState([]);

  useEffect(() => {
    const readListBook = getBooks();
    setReadBook(readListBook);
  }, []);
  return (
    <div className="w-full mx-auto mt-4 lg:mt-8">
      {readBook.map((book) => (
        <ReadingBook key={book.bookId} book={book}></ReadingBook>
      ))}
    </div>
  );
};

export default ReadBooks;
