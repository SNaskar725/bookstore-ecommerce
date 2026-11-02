import { useState } from "react";
import { BookOpen, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo">
        <BookOpen size={27} />
        <span>Book<span className="logo-highlight">Nest</span></span>
      </a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
        {menuOpen ? <X /> : <Menu />}
      </button>
      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#books" onClick={() => setMenuOpen(false)}>Books</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      </nav>
      <button className="cart-button" onClick={onCartClick}>
        <ShoppingCart size={20} /> Cart <span className="cart-count">{cartCount}</span>
      </button>
    </header>
  );
}