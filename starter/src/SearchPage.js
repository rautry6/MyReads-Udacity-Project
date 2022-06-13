import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchPage = ({
  searchForBooks,
  searchBooks,
  updateShelf,
  books,
  resetSearch,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    searchForBooks(event.target.value);
    if (event.target.value.trim() === "") {
      resetSearch();
    }
  };

  const updatedSearchBooks = searchBooks.map((book) => {
    books.map((bk) => {
      if (bk.id === book.id) {
        book.shelf = bk.shelf;
      }
      return bk;
    });
    return book;
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={() => resetSearch()}>
            Close
          </button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {updatedSearchBooks.map((bk) => {
            return <Book key={bk.id} book={bk} updateShelf={updateShelf} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
