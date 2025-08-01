import React from "react";
import "../styles.css";

export default function Watchlist({ movies, watchlist, toggleWatchlist }) {
  return (
    <div>
      <h1 className="title">Watchlist</h1>
      <p>Your watchlist is currently empty.</p>
      <p>Start adding movies to your watchlist from the Movies Grid.</p>
    </div>
  );
}
