import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import SearchPage from "./SearchPage";
import Book from "./Book";

function App() {
  const [books, setBooks] = useState([]);
  const [searchBook, setSeachBooks] = useState([]);

  const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
  const wantToRead = books.filter(book => book.shelf === "wantToRead")
  const read = books.filter(book => book.shelf === "read")

  useEffect(() => {
    BooksAPI.getAll().then(books => {
      setBooks(books);
    })
  }, [])

  const updateShelf = async (book, shelf) =>{
    await BooksAPI.update(book, shelf);

    let allBooks = await BooksAPI.getAll().then(book => {
      console.log(book);
      return book;
    })

    setBooks(allBooks);
  }

  const searchForBooks = (query) =>{
    if(query.length > 0){
      BooksAPI.search(query).then(books =>{
        setSeachBooks(books);
      })
    }else{
      setSeachBooks([]);
    }

    BooksAPI.getAll().then(books => {
      setBooks(books);
    })
  }
  
  return (
    <div className="app">
    {  console.log(currentlyReading)}
      <Routes>
        <Route
          path="/search"
          element={
            <SearchPage searchForBooks={searchForBooks}/>
          }
        />

        <Route
          exact
          path="/"
          element={
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
          }
        />
      </Routes>
    </div>
  );
}

export default App;
