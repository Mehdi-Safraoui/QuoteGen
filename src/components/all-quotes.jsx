import React, { useState, useEffect } from "react";

export default function AllQuotes() {
  const [fetchedQuotes, setFetchedQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        const quotes = data.quotes.map((item) => {
          return {
            id: item.id,
            quote: item.quote,
            author: item.author,
          };
        });
        setFetchedQuotes(quotes);
      })
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Quotes</h1>
      <ul>
        {fetchedQuotes.map((quote) => (
          <li key={quote.id}>
            {quote.id} <strong>{quote.author}:</strong> {quote.quote}
          </li>
        ))}
      </ul>
    </div>
  );
}
