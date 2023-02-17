import closeIcon from "../close.svg";
import { useState } from "react";

//Sort button functionality
const SortButton = ({ movies, setFilteredMovies, filteredMovies }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive(!isActive);

  //sort by episode
  const sortByEpisode = () => {
    const moviesByEpisode = [...movies].sort(
      (a, b) => a.episode_id - b.episode_id
    );
    setFilteredMovies(moviesByEpisode);
    console.log(filteredMovies);
    console.log("Sort rendered");
  };

  //sort by year
  const sortByYear = () => {
    const moviesByYear = [...movies].sort(
      (a, b) => b.release_date - a.release_date
    );
    setFilteredMovies(moviesByYear);
    console.log(filteredMovies);
    console.log("Sort rendered");
  };

  return (
    <div className="sort--container">
      <button className="sort--button" onClick={handleClick}>
        Sort by
      </button>

      {isActive && (
        <nav className="sort--menu">
          <div className="menu--title">
            <span>Sort By</span>
            <img
              className="close--button"
              src={closeIcon}
              alt=""
              onClick={handleClick}
            />
          </div>
          <ul>
            <li className="menu--items" onClick={sortByEpisode}>
              Episode
            </li>
            <li className="menu--items" onClick={sortByYear}>
              Year
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default SortButton;
