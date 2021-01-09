import logo from "./logo.svg";
import "./App.css";
import useSWR from "swr";

function App() {
  const apikey = "https://kitsu.io/api/edge/trending/anime";
  const fetcher = url => fetch(url).then(res => res.json());
  const { data, error } = useSWR(apikey, fetcher);

  console.log(data);
  if (!data) return <div>...Loading</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="App">
      <div className="cardContainer">
        {data.data.map(anime => {
          let {
            canonicalTitle,
            averageRating,
            synopsis,
            posterImage: { medium }
          } = anime.attributes;
          return (
            <div key={anime.id}>
              <img className="image" src={medium} alt="poster"></img>
              <h1>{canonicalTitle}</h1>
              <p>{synopsis.substring(0, 200)}...</p>
              <p>{averageRating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
