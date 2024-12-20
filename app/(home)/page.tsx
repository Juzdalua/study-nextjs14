import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const GetMovies = async () => {
  const res = await fetch(API_URL, { cache: "no-store" }); // SSR용 옵션
  return await res.json();
};

const Start = async () => {
  const movies = await GetMovies();

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-500">
      <h1 className="text-4xl font-bold text-blue-500">Home</h1>
      {/* <div>{JSON.stringify(movies)}</div> */}
      <div>
        <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
          Button
        </button>
      </div>

      <div>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Start;
