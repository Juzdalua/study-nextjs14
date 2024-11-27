import { Suspense } from "react";
import MovieInfo, { GetMovieById } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
  params: { id: string };
}

// export const generateMetadata = async ({ params: { id } }: IParams) => {
export const generateMetadata = async ({ params }: IParams) => {
  const { id } = await params;
  const movie = await GetMovieById(id);
  return {
    title: movie.title,
  };
};

// const Movie = async ({ params: { id } }: { params: { id: string } }) => {
const Movie = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default Movie;
