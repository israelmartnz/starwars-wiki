import { useState } from "react";
import searchIcon from "../search.svg";

const SearchBar = ({ movies, filteredMovies, setFilteredMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = () => {
    const searchList = movies.filter((item) => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
    setFilteredMovies(searchList);
    console.log(movies);
    console.log("Searchbar rendered");
  };

  return (
    <div className="searchbar--container">
      <input
        type="text"
        className="searchbar--input"
        placeholder="Type to search..."
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
      <img
        src={searchIcon}
        className="search--icon"
        alt=""
        onClick={() => searchMovies(searchTerm)}
      />
    </div>
  );
};

export default SearchBar;
