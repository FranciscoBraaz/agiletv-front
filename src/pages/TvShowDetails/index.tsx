import useGetTvShowDetails from "./hooks/useGetTvShowDetails";

// Styles
import "./index.scss";

function TvShowDetails() {
  const { isLoading, tvShowDetails, isError } = useGetTvShowDetails();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <main className="tv-show-details">
      <section
        className="tv-show-details__main-section"
        style={{
          backgroundImage: `
          linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)),
          linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)),
          url(${tvShowDetails.Images.Background})
        `,
        }}
      >
        <header className="tv-show-details__header">
          <div>
            <h1>{tvShowDetails.Title}</h1>
            <p>80% indicado</p>
          </div>
          <div>X</div>
        </header>
        <section className="tv-show-details__episodes">
          <p>GENERAL</p>
        </section>
      </section>
      <footer className="tv-show-details__info">
        <p>GENERAL</p>
      </footer>
    </main>
  );
}

export default TvShowDetails;
