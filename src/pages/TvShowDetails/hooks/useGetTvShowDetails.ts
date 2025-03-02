import { useQuery } from "@tanstack/react-query";

// Custom hooks
import { getTvShowDetails } from "../../../services/tvShowService";

interface Character {
  ID: string;
  Name: string;
  Role?: string;
}

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
      data.Cast = completeCast(data.Cast);

      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  function completeCast(cast: Character[]) {
    const fixedCastMap = {
      "Josh Hartnett": "Ethan Chandler",
      "Eva Green": "Vanessa Ives",
      "Timothy Dalton": "Sir Malcolm Murray",
    };
    const complementaryCastMap = {
      "Reeve Carney": "Dorian Gray",
      "Billie Piper": "Brona Croft",
      "Rory Kinnear": "The Creature",
      "Harry Treadaway": "Dr. Victor Frankenstein",
      "Sarah Greene": "Hecate Poole",
      "Danny Sapani": "Sembene",
      "David Warner": "Abraham Van Helsing",
    };

    const fullCast = cast.map((character) => {
      return {
        ID: character.ID,
        Name: character.Name,
        Role: fixedCastMap[character.Name as keyof typeof fixedCastMap],
      };
    });

    Object.keys(complementaryCastMap).forEach((key, index) => {
      const idNumber = String(index + 4).padStart(2, "0");
      fullCast.push({
        ID: `PER-${idNumber}`,
        Name: key,
        Role: complementaryCastMap[key as keyof typeof complementaryCastMap],
      });
    });

    return fullCast;
  }

  return {
    tvShowDetails,
    isLoading,
    isError,
  };
}

export default useGetTvShowDetails;
