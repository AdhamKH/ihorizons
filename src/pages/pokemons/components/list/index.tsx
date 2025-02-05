import React from "react";
import { Link } from "react-router";
import { Pokemon } from "../../../../types/pokemons";

const PokemonsList = ({ pokemons }: { pokemons: Pokemon }) => {
  const showPokemons = (): React.ReactNode => {
    return pokemons?.results.map((pokemon) => (
      <li className="flex justify-center items-center" key={pokemon.name}>
        <Link
          to={`/${pokemon.url.split("/")[6]}`}
          className="flex justify-center items-center gap-2 visited:text-blue-500 "
        >
          <p className="pt-5"> {pokemon.name} </p>
        </Link>
      </li>
    ));
  };
  return (
    <div
      style={{ padding: "1rem" }}
      className=" w-full min-h-screen flex justify-center items-center  "
    >
      <ul className="flex justify-center items-center flex-col gap-2.5 divide-y-1 divide-gray-200 w-full">
        {showPokemons()}
      </ul>
    </div>
  );
};

export default PokemonsList;
