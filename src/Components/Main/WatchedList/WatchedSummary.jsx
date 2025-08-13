export const WatchedSummary = ({watched, avgUserRating, avgRuntime}) => {
  return (
    <div className="summary">
      <h2>Movies you have watched</h2>
      <div>
        <p>
          <span>#️⃣ {watched.length} movies</span>
        </p>
        <p>
          <span>🌟 {avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳ {avgRuntime.toFixed(2)} min</span>
        </p>
      </div>
    </div>
  );
};
