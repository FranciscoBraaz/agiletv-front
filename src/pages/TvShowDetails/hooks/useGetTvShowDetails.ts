import { useQuery } from "@tanstack/react-query";

// Custom hooks
import { getTvShowDetails } from "../../../services/tvShowService";

function useGetTvShowDetails() {
  const {
    data: tvShowDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tv-show-details"],
    queryFn: fetchTvShowDetails,
  });

  async function fetchTvShowDetails() {
    try {
      const data = await getTvShowDetails();

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  return {
    tvShowDetails,
    isLoading,
    isError,
  };
}

export default useGetTvShowDetails;
