import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes,} from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";

function App() {
  const [books, setBooks] = useState([]);
  const [searchBook, setSearchBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const updateShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);

    let allBooks = await BooksAPI.getAll().then((book) => {
      return book;
    });

    setBooks(allBooks);
  };

  const searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          setSearchBooks([]);
        } else {
          setSearchBooks(books);
        }
      });
    } else {
      setSearchBooks([]);
    }

    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  };

  const resetSearch = () => {
    setSearchBooks([]);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <SearchPage
              searchForBooks={searchForBooks}
              searchBooks={searchBook}
              updateShelf={updateShelf}
              books={books}
              resetSearch={resetSearch}
            />
          }
        />

        <Route
          exact
          path="/"
          element={<MainPage books={books} updateShelf={updateShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
