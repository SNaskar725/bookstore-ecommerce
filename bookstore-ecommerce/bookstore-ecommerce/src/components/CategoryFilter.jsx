import { categories } from "../data/books";

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="categories" aria-label="Book categories">
      {categories.map((category) => (
        <button
          key={category}
          className={selected === category ? "category active" : "category"}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}