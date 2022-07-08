export async function getLocations() {
  const res = await fetch("https://pokeapi.co/api/v2/location");
  const data = await res.json();
  data.results.forEach((item) => {
    item.id = item.url.split("/").slice(-2)[0];
  });
  return data;
}
