import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, changeBookshelf }) => {

  const moveBook = (book, newBookshelf)=>{
     //Updates the books bookshelf value to reflect the new bookshelf they are in and saves the value of the bookshelf they were in before
    const originalBookshelf = book.bookshelf;
    book.bookshelf = newBookshelf;

    changeBookshelf(originalBookshelf, book, book.bookshelf);
  }

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: book.width,
            height: book.height,
            backgroundImage: book.backgroundImage,
          }}
        ></div>
       <BookshelfChanger book={book} changeBookshelf ={moveBook}/>
      </div>
      <div className="book-title">{book.name}</div>
      <div className="book-authors">{book.author}</div>
    </div>
  );
};

export default Book;
