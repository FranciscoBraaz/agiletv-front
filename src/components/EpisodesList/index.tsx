import Tabs from "../Tabs";
import useManageSeasons from "./hooks/useManageSeasons";

// Styles
import "./index.scss";

const seasons = [
  {
    title: "T1",
    key: "t1",
  },
  {
    title: "T2",
    key: "t2",
  },
  {
    title: "T3",
    key: "t3",
  },
];

function EpisodesList() {
  const { activeSeason, handleChangeSeason } = useManageSeasons();

  return (
    <aside className="episodes-list">
      <Tabs
        tabs={seasons}
        activeTab={activeSeason}
        onChange={(item) => handleChangeSeason(item)}
      />
    </aside>
  );
}

export default EpisodesList;
