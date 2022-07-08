// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { rest } from "msw";

const server = setupServer(
  rest.get("https://pokeapi.co/api/v2/location", (req, res, ctx) => {
    return res(
      ctx.json({
        count: 796,
        next: "https://pokeapi.co/api/v2/location?offset=20&limit=20",
        previous: null,
        results: [
          {
            name: "canalave-city",
            url: "https://pokeapi.co/api/v2/location/1/",
          },
          { name: "eterna-city", url: "https://pokeapi.co/api/v2/location/2/" },
          {
            name: "pastoria-city",
            url: "https://pokeapi.co/api/v2/location/3/",
          },
          {
            name: "sunyshore-city",
            url: "https://pokeapi.co/api/v2/location/4/",
          },
          {
            name: "sinnoh-pokemon-league",
            url: "https://pokeapi.co/api/v2/location/5/",
          },
          {
            name: "oreburgh-mine",
            url: "https://pokeapi.co/api/v2/location/6/",
          },
          {
            name: "valley-windworks",
            url: "https://pokeapi.co/api/v2/location/7/",
          },
          {
            name: "eterna-forest",
            url: "https://pokeapi.co/api/v2/location/8/",
          },
          {
            name: "fuego-ironworks",
            url: "https://pokeapi.co/api/v2/location/9/",
          },
          { name: "mt-coronet", url: "https://pokeapi.co/api/v2/location/10/" },
          {
            name: "great-marsh",
            url: "https://pokeapi.co/api/v2/location/11/",
          },
          {
            name: "solaceon-ruins",
            url: "https://pokeapi.co/api/v2/location/12/",
          },
          {
            name: "sinnoh-victory-road",
            url: "https://pokeapi.co/api/v2/location/13/",
          },
          {
            name: "ravaged-path",
            url: "https://pokeapi.co/api/v2/location/14/",
          },
          {
            name: "oreburgh-gate",
            url: "https://pokeapi.co/api/v2/location/15/",
          },
          {
            name: "stark-mountain",
            url: "https://pokeapi.co/api/v2/location/16/",
          },
          {
            name: "spring-path",
            url: "https://pokeapi.co/api/v2/location/17/",
          },
          {
            name: "turnback-cave",
            url: "https://pokeapi.co/api/v2/location/18/",
          },
          {
            name: "snowpoint-temple",
            url: "https://pokeapi.co/api/v2/location/19/",
          },
          {
            name: "wayward-cave",
            url: "https://pokeapi.co/api/v2/location/20/",
          },
        ],
      })
    );
  })
);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
