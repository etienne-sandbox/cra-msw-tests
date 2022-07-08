import { useQuery } from "react-query";

export function App() {
  const { data, isLoading, error } = useQuery("pokemon/locations", () =>
    fetch("https://pokeapi.co/api/v2/location").then((res) => res.json())
  );

  return (
    <div>
      <h1>Pokemon Locations</h1>
      {error ? (
        <div>Error: {error.message}</div>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.results.map((location) => (
            <li key={location.name}>{location.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
