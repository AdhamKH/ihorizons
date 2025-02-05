// __mocks__/fetchBaseQuery.ts
import { vi } from "vitest";

export const fetchBaseQuery = vi.fn(() => async (args: any) => {
  if (args.url === "pokemon") {
    return {
      data: {
        results: [
          { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
          { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
        ],
      },
    };
  }
  if (args.url === "pokemon/1") {
    return {
      data: {
        id: "1",
        name: "bulbasaur",
        height: 7,
        weight: 69,
      },
    };
  }

  throw new Error("Invalid URL");
});
