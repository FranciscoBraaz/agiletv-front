import { Genre } from "../@types/tvShowDetails";

export function formatTvShowGenres(genres: Genre[] | undefined): string {
  if (!genres) return "";

  return genres.map((genre) => genre.Title.toUpperCase()).join(" / ");
}
