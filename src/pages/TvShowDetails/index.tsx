import EpisodesList from "../../components/EpisodesList";
import Tabs from "../../components/Tabs";
import useGetTvShowDetails from "./hooks/useGetTvShowDetails";

// Styles
import "./index.scss";

const footerTabs = [
  {
    title: "GENERAL",
    key: "general",
  },
  {
    title: "ELENCO",
    key: "cast",
  },
  {
    title: "PRINCIPALES PREMIOS",
    key: "top-awards",
  },
];

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
          linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
          linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)),
          url(${tvShowDetails.Images.Background})
        `,
        }}
      >
        <header className="tv-show-details__header">
          <div>
            <h1>{tvShowDetails.Title}</h1>
            <p>80% INDICADO / CIENCIA FINCCION / 2015 / EUA / 14</p>
          </div>
          <div>X</div>
        </header>
        <section className="tv-show-details__episodes">
          <EpisodesList />
        </section>
      </section>
      <footer className="tv-show-details__info">
        <Tabs
          tabs={footerTabs}
          activeTab="general"
          styleText={{ fontSize: 17, fontWeight: 600 }}
          styleTabLine={{ backgroundColor: "#2A2B2D" }}
          onChange={(value) => console.log(value)}
        />
      </footer>
    </main>
  );
}

export default TvShowDetails;
