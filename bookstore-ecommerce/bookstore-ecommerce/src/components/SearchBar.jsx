import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <label className="search-container">
      <Search size={20} />
      <input
        type="search"
        placeholder="Search by book title or author..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-label="Search books"
      />
    </label>
  );
}