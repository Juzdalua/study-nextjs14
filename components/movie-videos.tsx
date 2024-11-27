import { API_URL } from "../app/(home)/page";

const GetVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await GetVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;
