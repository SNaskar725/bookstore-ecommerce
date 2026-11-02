import BookCard from "./BookCard";

export default function BookList({ books, onAddToCart }) {
  if (books.length === 0) {
    return <p className="no-results">No books found. Try another search.</p>;
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}