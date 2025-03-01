import { useState } from "react";

function useManageSeasons() {
  const [activeSeason, setActiveSeason] = useState("t1");

  function handleChangeSeason(season: string) {
    setActiveSeason(season);
  }

  return {
    activeSeason,
    handleChangeSeason,
  };
}

export default useManageSeasons;
