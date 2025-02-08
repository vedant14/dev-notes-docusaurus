import React, { useState, useEffect } from "react";
import lunr from "lunr";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(null);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data) => {
        setIndex(lunr.Index.load(data.index));
        setDocs(data.docs);
      })
      .catch((err) => console.error("Failed to load search index", err));
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);

    if (!index || searchTerm.length < 2) {
      setResults([]);
      return;
    }

    try {
      // Allow partial matches using wildcards
      const lunrQuery = `${searchTerm}*`; 

      const searchResults = index.search(lunrQuery).map(({ ref }) =>
        docs.find((doc) => doc.id === ref)
      );

      setResults(searchResults);
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {results.length > 0 ? (
          results.map((result) => (
            <li key={result.id}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))
        ) : (
          query.length > 1 && <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
