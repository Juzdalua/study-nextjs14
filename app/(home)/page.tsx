import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const GetMovies = async () => {
  // return fetch(URL).then(response => response.json());

  await new Promise((resolve) => setTimeout(resolve, 5000)); // 임의 로딩
  // const res = await fetch(URL); // 처음 한번만 API 호출 -> cache 데이터 사용 -> cache: "force-cache"
  // const res = await fetch(URL, { next: { revalidate: 10 } }); // 10초마다 캐시 갱신
  const res = await fetch(URL, { cache: "no-store" }); // SSR용 옵션
  return await res.json();
};

const Start = async () => {
  const movies = await GetMovies();

  return (
    <div>
      <h1>Home</h1>
      <div>{JSON.stringify(movies)}</div>
    </div>
  );
};

export default Start;
