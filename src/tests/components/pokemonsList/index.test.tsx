import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../store";
import PokemonsList from "../../../pages/pokemons/components/list";

describe("Pokemons", () => {
  const list = [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  ];
  const pokemons = {
    results: list,
  };

  it("should render  pokemons list", () => {
    render(
      <Provider store={store}>
        <PokemonsList pokemons={pokemons} />
      </Provider>
    );
    expect(screen.getByText("bulbasaur")).toBeInTheDocument();
  });
});
