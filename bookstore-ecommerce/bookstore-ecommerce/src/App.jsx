import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { books } from "./data/books";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredBooks = useMemo(() => books.filter((book) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query);
    const matchesCategory = category === "All" || book.category === category;
    return matchesSearch && matchesCategory;
  }), [search, category]);

  const addToCart = (book) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === book.id);
      return existing
        ? current.map((item) => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...book, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCart((current) => current
      .map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item)
      .filter((item) => item.quantity > 0));
  };

  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id));
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <main>
        <section className="book-section" id="books">
          <div className="section-heading">
            <span className="section-tag">OUR COLLECTION</span>
            <h2>Explore Our Books</h2>
            <p>Find your next favorite story from our collection.</p>
          </div>
          <SearchBar search={search} setSearch={setSearch} />
          <CategoryFilter selected={category} onSelect={setCategory} />
          <BookList books={filteredBooks} onAddToCart={addToCart} />
        </section>
        <section className="about-section" id="about">
          <h2>Books Open New Worlds</h2>
          <p>At BookNest, we believe every book has a story worth discovering. Explore, learn, and enjoy reading with us.</p>
        </section>
      </main>
      <Footer />
      <Cart
        cart={cart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}