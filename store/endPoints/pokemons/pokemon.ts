import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon, SinglePokemon } from "../../../src/types/pokemons";

const BASE_URL = import.meta.env.VITE_MAIN_URL_BASE;
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon, void>({
      query: () => `pokemon`,
    }),
    getSinglePokemon: builder.query<SinglePokemon, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetSinglePokemonQuery } = pokemonApi;
