import React from "react";
import { X } from "lucide-react";

// Custom hooks
import useGetTvShowEpisodes from "./hooks/useGetTvEpisodes";
import useGetTvShowDetails from "./hooks/useGetTvShowDetails";
import useManageTabs from "./hooks/useManageTabs";

// Utils
import { formatTvShowGenres } from "../../utils";

// Components
import EpisodesList from "../../components/EpisodesList";
import Tabs from "../../components/Tabs";
import GeneralInfo from "../../components/GeneralInfo";
import { CastInfo } from "../../components/CastInfo";
import TopAwards from "../../components/TopAwards";

// Styles
import "./index.scss";

// Constants
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

const contentTabs = {
  general: <GeneralInfo synopsis="" />,
  cast: <CastInfo cast={[]} />,
  "top-awards": <TopAwards />,
};

function TvShowDetails() {
  const {
    isLoading: isLoadingShowDetails,
    tvShowDetails,
    isError: isErrorShowDetails,
  } = useGetTvShowDetails();
  const {
    isLoading: isLoadingEpisodes,
    episodesBySeason,
    isError: isErrorEpisodes,
  } = useGetTvShowEpisodes();
  const { activeTab, handleChangeTab } = useManageTabs();

  if (isLoadingShowDetails || isLoadingEpisodes) {
    return <p>Loading...</p>;
  }

  if (isErrorShowDetails || isErrorEpisodes) {
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
          url(${tvShowDetails?.Images.Background})
        `,
        }}
      >
        <header className="tv-show-details__header">
          <div>
            <h1>{tvShowDetails?.Title}</h1>
            <p>
              80% INDICADO / {formatTvShowGenres(tvShowDetails?.Genres)} /{" "}
              {tvShowDetails?.Year} / EUA / 14
            </p>
          </div>
          <X color="#878787" size={32} />
        </header>
        <section className="tv-show-details__episodes">
          {episodesBySeason && (
            <EpisodesList episodesBySeason={episodesBySeason} />
          )}
        </section>
      </section>
      <footer className="tv-show-details__info">
        <Tabs
          tabs={footerTabs}
          activeTab={activeTab}
          styleText={{ fontSize: 17, fontWeight: 600 }}
          styleTabLine={{ backgroundColor: "#2A2B2D" }}
          onChange={(value) => handleChangeTab(value)}
        />
        {React.cloneElement(
          contentTabs[activeTab as keyof typeof contentTabs],
          { synopsis: tvShowDetails?.Synopsis, cast: tvShowDetails?.Cast }
        )}
      </footer>
    </main>
  );
}

export default TvShowDetails;
