import { useEffect, useState } from "react";
import SortButton from "../src/components/SortButton";
import SearchBar from "../src/components/Searchbar";
import MovieTitle from "../src/components/MovieTitle";
import MovieDescription from "./components/MovieDescription";
import "./styles.css";
const STARWARS_API_URL = "https://swapi.dev/api/films/?format=json";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedDescription, setSelectedDescription] = useState([]);
  const [showDescription, setShowDescription] = useState(false);

  //Star wars API call
  useEffect(() => {
    const movieApiCall = async () => {
      const apiData = await fetch(STARWARS_API_URL);
      const apiDataJson = await apiData.json();

      setMovies(apiDataJson.results);
    };
    movieApiCall();
  }, []);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  useEffect(() => {
    setShowDescription(false);
  }, [filteredMovies]);

  console.log("App component rendered");

  //APP return
  return (
    <div className="App">
      <div className="header">
        <SortButton
          movies={movies}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies}
        />
        <SearchBar
          movies={movies}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies}
        />
      </div>
      <div className="movie--container">
        <div className="movie--details">
          {movies?.length > 0 ? (
            <div className="container">
              {filteredMovies.map((movie) => (
                <MovieTitle
                  movie={movie}
                  key={movie.episode_id}
                  selectedDescription={selectedDescription}
                  setSelectedDescription={setSelectedDescription}
                  showDescription={showDescription}
                  setShowDescription={setShowDescription}
                />
              ))}
            </div>
          ) : (
            <div>
              <h3 className="error--message"> Oops! No movies found</h3>
            </div>
          )}
        </div>
        {movies?.length > 0 && (
          <MovieDescription
            selectedDescription={selectedDescription}
            setSelectedDescription={setSelectedDescription}
            showDescription={showDescription}
            setShowDescription={setShowDescription}
          />
        )}
      </div>
    </div>
  );
}
