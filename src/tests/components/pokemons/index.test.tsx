import { it, expect, describe } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import Pokemons from "../../../pages/pokemons";
import { Provider } from "react-redux";
import { store } from "../../../../store";

describe("Pokemons", () => {
  it("should render  pokemons", () => {
    render(
      <Provider store={store}>
        <Pokemons />
      </Provider>
    );
  });
});

describe("Pokemons Heading", () => {
  it("should render  pokemons Heading", () => {
    render(
      <Provider store={store}>
        <Pokemons />
      </Provider>
    );
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Loading.../i);
  });
});

describe("Pokemons List", () => {
  it("should render  pokemons", () => {
    render(
      <Provider store={store}>
        <Pokemons />
      </Provider>
    );
  });
});
