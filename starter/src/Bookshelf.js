import Book from "./Book";

const Bookshelf = ({ bookshelfName, books, updateShelf }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => {
              return (
                <li key={index}>
                  <Book book={book} updateShelf={updateShelf} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
