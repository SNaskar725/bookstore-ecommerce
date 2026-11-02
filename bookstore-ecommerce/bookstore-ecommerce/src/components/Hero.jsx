import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-tag">YOUR NEXT GREAT READ STARTS HERE</span>
        <h1>Discover Your Next <span>Favorite Book</span></h1>
        <p>Explore stories, ideas, and adventures. Find the perfect book and let your imagination grow.</p>
        <a href="#books" className="hero-button">Explore Books <ArrowRight size={18} /></a>
        <div className="hero-stats">
          <div><strong>1,000+</strong><small>Books</small></div>
          <div><strong>500+</strong><small>Readers</small></div>
          <div><strong>4.8/5</strong><small>Rating</small></div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900" alt="Bookshelves in a library" />
      </div>
    </section>
  );
}