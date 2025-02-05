import { describe, it, expect, vi, beforeEach } from "vitest";
import { configureStore } from "@reduxjs/toolkit";
import { fetchBaseQuery } from "../../../mocks";
import { pokemonApi } from "../../../../store/endPoints/pokemons/pokemon";

// Mock the fetchBaseQuery
vi.mock("@reduxjs/toolkit/query/react", async () => {
  const actual = await vi.importActual("@reduxjs/toolkit/query/react");
  return {
    ...actual,
    fetchBaseQuery: vi.fn(() => fetchBaseQuery),
  };
});

describe("pokemonApi", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        [pokemonApi.reducerPath]: pokemonApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
    });
  });

  it("should fetch a single pokemon by id", async () => {
    const result = await store.dispatch(
      pokemonApi.endpoints.getSinglePokemon.initiate("1")
    );

    expect(result.data).toEqual({
      id: "1",
      name: "bulbasaur",
      height: 7,
      weight: 69,
    });

    // Ensure the request was successful
    expect(result.status).toBe("fulfilled");
  });
});
