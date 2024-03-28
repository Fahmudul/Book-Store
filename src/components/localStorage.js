import toast from "react-hot-toast";

export const getBooks = () => {
  let books = [];
  const storedBlogs = localStorage.getItem("books");
  if (storedBlogs) {
    books = JSON.parse(storedBlogs);
  }
  return books;
};
export const getWishListBooks = () => {
  let books = [];
  const storedBlogs = localStorage.getItem("wish-books");
  if (storedBlogs) {
    books = JSON.parse(storedBlogs);
  }
  return books;
};

export const saveReadBook = (book) => {
  let books = getBooks();
  const isExist = books.find((blg) => blg.bookId == book.bookId);
  if (isExist) {
    return toast.error("Already read the book");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("added in readlist Successfully");
};

export const saveWishListdBook = (book, id) => {
  let books = getWishListBooks();
  const readListBooks = getBooks();
  // console.log(readListBooks);

  // Check if the book is already in the wishlist
  const isExistBook = books.find((blg) => blg.bookId == id);

  const isExistReadListBook = readListBooks.find(
    (readListBook) => readListBook.bookId == id
  );
  if (isExistReadListBook) {
    // Check if the book is also in the read list
    return toast.error("Already read the book");
  }
  if (isExistBook) {
    // Book is in the read list, alert and return
    return toast.error("Already added in the wishList");
  }

  // Book not in wishlist or read list, add to wishlist
  books.push(book);
  localStorage.setItem("wish-books", JSON.stringify(books));
  return toast.success("Successfully added in wishlists");
};
