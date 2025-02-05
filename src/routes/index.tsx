import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const Pokemons = lazy(() => import("../pages/pokemons"));
const SinglePokemon = lazy(() => import("../pages/singlePokemon"));

export const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Pokemons />,
      },
      {
        path: "/:id",
        element: <SinglePokemon />,
      },
    ],
  },
]);
