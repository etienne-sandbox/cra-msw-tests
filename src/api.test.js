import { getLocations } from "./api";

test("should get locations", async () => {
  const res = await getLocations();
  expect(res.results).toHaveLength(20);
  expect(res.results[0]).toEqual({
    name: "canalave-city",
    url: "https://pokeapi.co/api/v2/location/1/",
    id: "1",
  });
});
