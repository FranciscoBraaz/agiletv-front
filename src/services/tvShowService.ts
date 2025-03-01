import { api } from "./api";

export async function getTvShowDetails() {
  const { data } = await api.get("/tv-shows/SHOW123.json");

  return data;
}
