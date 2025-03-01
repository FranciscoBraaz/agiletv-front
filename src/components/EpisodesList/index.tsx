import { Season } from "../../@types/episode";
import EpisodeAccordion from "../EpisodeAccordion";
import Tabs from "../Tabs";
import useManageSeasons from "./hooks/useManageSeasons";

// Styles
import "./index.scss";

function EpisodesList({ episodesBySeason }: { episodesBySeason: Season }) {
  const { activeSeason, handleChangeSeason } = useManageSeasons();
  const seasons = Object.keys(episodesBySeason).map((season) => ({
    title: `T${season}`,
    key: `t${season}`,
  }));

  return (
    <aside className="episodes-list">
      <Tabs
        tabs={seasons}
        activeTab={activeSeason}
        onChange={(item) => handleChangeSeason(item)}
      />
      <ul>
        {episodesBySeason[Number(activeSeason.replace("t", ""))].map(
          (episode) => (
            <li key={episode.ID}>
              <EpisodeAccordion episode={episode} />
            </li>
          )
        )}
      </ul>
    </aside>
  );
}

export default EpisodesList;
