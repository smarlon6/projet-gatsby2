import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.length === 0) {
      setMovieData(null);
      setError(null);
      return;
    }

    const fetchMovieData = async () => {
      const API_KEY = "6eaed2d5";
      const API_URL = `https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.Response === "True") {
          setMovieData(data);
          setError(null);
        } else {
          setError(data.Error);
          setMovieData(null);
        }
      } catch (error) {
        setError("Ocorreu um erro ao buscar os dados do filme.");
        setMovieData(null);
      }
    };

    fetchMovieData();
  }, [query]); 

  const handleSearch = (event) => {
    event.preventDefault(); 
    if (query) {
      setQuery(query);
    }
  };

  return (
    <Layout>
      <div className="movies-page">
        <h1>Pesquisar um filme</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Digite o título do filme"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit">Pesquisar</button>
        </form>

        {error && <p className="error-message">{error}</p>}

        {movieData && (
          <div className="movie-details">
            <h2>{movieData.Title}</h2>
            <p><strong>Ano:</strong> {movieData.Year}</p>
            <p><strong>Gênero:</strong> {movieData.Genre}</p>
            <p><strong>Diretor:</strong> {movieData.Director}</p>
            <p><strong>Enredo:</strong> {movieData.Plot}</p>
            <img src={movieData.Poster} alt={movieData.Title} />
          </div>
        )}
      </div>
    </Layout>
  );
};
