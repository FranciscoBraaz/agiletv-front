interface Episode {
  Duration: number;
  EpisodeNumber: number;
  ID: string;
  SeasonNumber: number;
  Image: string;
  Synopsis: string;
  Title: string;
}

interface Season {
  [key: number]: Episode[];
}

export type { Episode, Season };
