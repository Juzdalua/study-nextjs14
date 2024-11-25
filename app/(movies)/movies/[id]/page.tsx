export const metadata = {
  title: "Movie",
};

// const Movie = (props) => {
const Movie = ({ params: { id } }: { params: { id: string } }) => {
  return <h1>Movie - {id}</h1>;
};

export default Movie;
