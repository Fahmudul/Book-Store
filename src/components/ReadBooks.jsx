import { useEffect, useState } from "react";
import { getBooks } from "./localStorage";
import ReadingBook from "./ReadingBook";

const ReadBooks = () => {
  const [readBook, setReadBook] = useState([]);
  const [displayReadBook, setDisplayReadBook] = useState([]);
  //     const [wishlistBook, setWishlistBook] = useState([]);

  const handleBookFilter = (filter) => {
    
  }


  useEffect(() => {
    const readListBook = getBooks();
    setReadBook(readListBook);
    setDisplayReadBook(readListBook);
  }, []);
  return (
    <div className="w-full mx-auto mt-4 lg:mt-8 flex flex-col gap-5">
      {displayReadBook.map((book) => (
        <ReadingBook key={book.bookId} book={book}></ReadingBook>
      ))}
    </div>
  );
};

export default ReadBooks;
