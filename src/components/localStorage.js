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
//   const isExist = books.find((blg) => blg.bookId == book.bookId);
  //   if (isExist) {
  //     return toast.error("Already Bookmarked!");
  //   }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  //   toast.success("Bookmarked Successfully");
};
export const saveWishListdBook = (book) => {
  let books = getBooks();
//   const isExist = books.find((blg) => blg.bookId == book.bookId);
  //   if (isExist) {
  //     return toast.error("Already Bookmarked!");
  //   }
  books.push(book);
  localStorage.setItem("wish-books", JSON.stringify(books));
  //   toast.success("Bookmarked Successfully");
};
