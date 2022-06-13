const BookshelfChanger = ({book, updateShelf}) =>{

    const handleChange = (event) =>{
        updateShelf(book, event.target.value)
    }

    return(
      <div className="book-shelf-changer">
        <select onChange={handleChange} value={!book.shelf && "none"}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
}

export default BookshelfChanger;