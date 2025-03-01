export interface Episode {
  Duration: number;
  EpisodeNumber: number;
  ID: string;
  SeasonNumber: number;
  Image: string;
  Synopsis: string;
  Title: string;
}

export interface Season {
  [key: number]: Episode[];
}
