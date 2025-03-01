import { api } from "./api";

export async function getTvShowDetails() {
  const { data } = await api.get("/tv-shows/SHOW123.json");

  return data;
}

export async function getTvShowEpisodes() {
  const { data } = await api.get("/episodes/SHOW123.json");

  return data;
}
