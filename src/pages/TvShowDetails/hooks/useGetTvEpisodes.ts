import { useQuery } from "@tanstack/react-query";

// Custom hooks
import { getTvShowEpisodes } from "../../../services/tvShowService";
import { Episode, Season } from "../../../@types/episode";

function useGetTvShowEpisodes() {
  const {
    data: episodesBySeason,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tv-show-episodes"],
    queryFn: fetchTvShowEpisodes,
  });

  async function fetchTvShowEpisodes() {
    try {
      const episodes = await getTvShowEpisodes();
      const episodesBySeason = {} as Season;

      episodes.forEach((episode: Episode) => {
        if (episode) {
          if (!episodesBySeason[episode.SeasonNumber]) {
            episodesBySeason[episode.SeasonNumber] = [episode];
          } else {
            episodesBySeason[episode.SeasonNumber].push(episode);
          }
        }
      });
      return episodesBySeason;
    } catch (error) {
      console.error(error);
      return {};
    }
  }

  return {
    episodesBySeason,
    isLoading,
    isError,
  };
}

export default useGetTvShowEpisodes;
