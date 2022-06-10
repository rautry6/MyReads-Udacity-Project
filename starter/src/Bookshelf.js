import Book from "./Book";

const Bookshelf = ({bookshelfName, books}) =>{
    return(
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{bookshelfName}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book, index) =>{
                        return(
                            <li>
                                 <Book book={book} key={index}/>
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