//This component will render the movie title data
export default function MovieTitle({
  movie: { episode_id, title, release_date, opening_crawl, director },
  setSelectedDescription,
  setShowDescription
}) {
  const selectMovie = () => {
    setSelectedDescription({
      episode_id,
      title,
      release_date,
      opening_crawl,
      director
    });
    setShowDescription((prevState) => true);
  };

  return (
    <div className="episode--data" onClick={selectMovie} value={episode_id}>
      <div className="title--container">
        <p className="episode--num">Episode {episode_id}</p>
        <p className="episode--title">{title}</p>
        <p className="episode--date">{release_date}</p>
      </div>
    </div>
  );
}
