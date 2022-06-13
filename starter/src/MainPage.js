import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

const MainPage = ({ books, updateShelf }) => {
  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            bookshelfName="Currently Reading"
            books={currentlyReading}
            updateShelf={updateShelf}
          />
          <Bookshelf
            bookshelfName="Want To Read"
            books={wantToRead}
            updateShelf={updateShelf}
          />
          <Bookshelf
            bookshelfName="Read"
            books={read}
            updateShelf={updateShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a book</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
