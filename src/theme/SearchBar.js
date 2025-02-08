import React, { useState, useEffect, useRef } from "react";
import lunr from "lunr";
import "./search.css"; // Import custom styles
import Link from "@docusaurus/Link";

const Search = () => {
  const inputRef = useRef(null);
  const resultsRef = useRef(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(null);
  const [docs, setDocs] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data) => {
        setIndex(lunr.Index.load(data.index));
        setDocs(data.docs);
      })
      .catch((err) => console.error("Failed to load search index", err));

    const handleKeyPress = (event) => {
      if (typeof navigator !== "undefined" && event.key === "/") {
        event.preventDefault();
        if (inputRef.current) inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);
    setSelectedIndex(-1);

    if (!index || searchTerm.length < 2) {
      setResults([]);
      return;
    }

    try {
      const lunrQuery = `${searchTerm}*`;
      const searchResults = index
        .search(lunrQuery)
        .map(({ ref }) => docs.find((doc) => doc.id === ref));
      if (searchResults.length > 0) {
        setSelectedIndex(0);
      }
      setResults(searchResults.slice(0, 10));
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      e.preventDefault();
      resultsRef.current?.children[selectedIndex]?.querySelector("a")?.click();
      setQuery("");
      setResults([]);
    }
  };

  return (
    <div className="navbar__items navbar__items--right search-container">
      <input
        type="text"
        value={query}
        ref={inputRef}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="🔍 Use / to search"
        className="search-input"
      />
      {results.length > 0 && (
        <ul className="search-results" ref={resultsRef}>
          {results.map((result, index) => (
            <li
              key={result.id}
              className={index === selectedIndex ? "selected" : ""}
            >
              <Link href={result.url} className="search-result-item">
                {result.title}
                <p className="subdued">{result.url.split("/").slice(-2, -1)[0]}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {query.length > 1 && results.length === 0 && (
        <ul className="search-results">
          <li className="no-results">No results found</li>
        </ul>
      )}
    </div>
  );
};

export default Search;
