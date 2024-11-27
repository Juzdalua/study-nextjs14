import { API_URL } from "../app/(home)/page";

export const GetMovieById = async(id:string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

const MovieInfo = async({id}:{id:string}) => {
  const movie = await GetMovieById(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}

export default MovieInfo;