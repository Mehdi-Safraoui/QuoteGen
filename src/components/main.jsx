import React, { useState, useEffect } from "react";
import Profile from "./profile";
import useAuth from "../auth-context";

export default function Main() {
  const [currentQuote, setCurrentQuote] = useState("");
  const [currentAuthor, setCurrentAuthor] = useState("");
  const [quoteHistory, setQuoteHistory] = useState([]);
  const { user } = useAuth();

  // Fonction pour ajouter une nouvelle citation à l'historique
  const addToHistory = (newQuote) => {
    const updatedHistory = [...quoteHistory, newQuote];
    setQuoteHistory(updatedHistory);
    // Enregistrer l'historique mis à jour dans localStorage
    localStorage.setItem(
      `${user.uid}_quote_history`,
      JSON.stringify(updatedHistory)
    );
  };

  useEffect(() => {
    // Appel à votre API pour obtenir une citation aléatoire lors du chargement de la page
    fetchRandomQuote();
  }, []); // Dépendances vides pour s'assurer que cela se produit uniquement une fois lors du chargement initial

  const fetchRandomQuote = () => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.quotes.length);
        const randomQuote = data.quotes[randomIndex];
        setCurrentQuote(randomQuote.quote);
        setCurrentAuthor(randomQuote.author);
        // Appeler directement la fonction addToHistory dans Profile
        addToHistory(randomQuote.quote);
      })
      .catch((error) => console.error("Error fetching random quote:", error));
  };


  const handleGenerateNewQuote = () => {
    fetchRandomQuote();
  };

<Profile addQuoteToHistory={addToHistory} />;

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Random Quote</h1>
        <p className="text-lg">{`"${currentQuote}"`}</p>
        <p className="mt-2 text-gray-600">{`- ${currentAuthor}`}</p>
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={handleGenerateNewQuote}
      >
        Generate New Quote
      </button>
    </div>
  );
}
