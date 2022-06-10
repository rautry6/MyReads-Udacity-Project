import Book from "./Book";

const Bookshelf = ({bookshelfName, books, changeBookshelf}) =>{
    return(
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfName}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book, index) =>{
                        return(
                            <li key = {index}>
                                 <Book book={book} changeBookshelf = {changeBookshelf}/>
                            </li>
                        )})
                    }
                  </ol>
                </div>
              </div>
        </div>
    )
}

export default Bookshelf;