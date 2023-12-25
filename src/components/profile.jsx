import React, { useState, useEffect } from "react";
import useAuth from "../auth-context";

export default function Profile({ addQuoteToHistory }) {
  const { user } = useAuth();
  const [quoteHistory, setQuoteHistory] = useState([]);

  useEffect(() => {
    // Récupérer l'historique des citations depuis localStorage
    if (user && user.uid) {
      const storedHistory = localStorage.getItem(`${user.uid}_quote_history`);
      if (storedHistory) {
        setQuoteHistory(JSON.parse(storedHistory));
      }
    }
  }, [user]);

  // Vérifiez si l'utilisateur est défini
  if (!user) {
    return (
      <div>
        <h1>Vous n'êtes pas connecté.</h1>
      </div>
    );
  }

  // Extraire la partie avant "@" de l'email
  const [username] = user.email.split("@");


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-lg">
          Bienvenue{" "}
          <span className="font-bold">
            {user ? username : "Utilisateur inconnu"}
          </span>
        </h1>
      </div>
      <div>
        <h2>Historique des citations reçues :</h2>
        <ul>
          {quoteHistory.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
