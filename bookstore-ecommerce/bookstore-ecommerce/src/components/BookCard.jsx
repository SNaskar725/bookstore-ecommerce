import { Star, Plus } from "lucide-react";

export default function BookCard({ book, onAddToCart }) {
  return (
    <article className="book-card">
      <div className="book-image">
        <img src={book.image} alt={`Cover-style image for ${book.title}`} loading="lazy" />
        <span className="book-category">{book.category}</span>
      </div>
      <div className="book-info">
        <div className="rating"><Star size={15} fill="currentColor" /> {book.rating}</div>
        <h3>{book.title}</h3>
        <p className="author">by {book.author}</p>
        <div className="book-footer">
          <strong>₹{book.price}</strong>
          <button onClick={() => onAddToCart(book)}><Plus size={16} /> Add</button>
        </div>
      </div>
    </article>
  );
}