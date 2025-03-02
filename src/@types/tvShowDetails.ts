interface Character {
  ID: string;
  Name: string;
  Role?: string;
}

interface Genre {
  ID: string;
  Title: string;
}

interface TvShowDetails {
  ID: string;
  Title: string;
  Synopsis: string;
  Cast: Character[];
  Genres: Genre[];
  Images: {
    Background: string;
  };
  Year: number;
}

export type { Character, TvShowDetails, Genre };
