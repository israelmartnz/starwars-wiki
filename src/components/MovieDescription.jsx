//This component renders the movie description once it's clicked
export default function MovieDescription({
  selectedDescription: { title, opening_crawl, director },
  showDescription
}) {
  return (
    <div className="description--container">
      {showDescription ? (
        <div className="description--flex">
          <h3 className="description--title">{title}</h3>
          <p className="description--paragraph">{opening_crawl}</p>
          <p className="description--director">Directed by: {director}</p>
        </div>
      ) : (
        <h1 className="error--message">No movie selected</h1>
      )}
    </div>
  );
}
