import { useContext } from "react";
// import { getBooks } from "./localStorage";
import ReadingBook from "./ReadingBook";
import { HandleOptionValue } from "./ListedBooks";

const ReadBooks = () => {
  let displayReadBook = useContext(HandleOptionValue);
  console.log(displayReadBook);
  return (
    <div className="w-full mx-auto mt-4 lg:mt-8 flex flex-col gap-5">
      {displayReadBook.map((book) => (
        <ReadingBook key={book.bookId} book={book}></ReadingBook>
      ))}
    </div>
  );
};

export default ReadBooks;
