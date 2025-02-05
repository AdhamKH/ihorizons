import { useGetPokemonsQuery } from "../../../store/endPoints/pokemons/pokemon";
import PokemonsList from "./components/list";

const Pokemons = () => {
  const { data, isLoading, isFetching } = useGetPokemonsQuery();
  console.log("Data", data);
  const pokemons = data;
  let loading = isLoading || isFetching;

  if (loading) {
    return (
      <div className=" w-full h-screen flex justify-center items-center bg-gray-100">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 ">
      <h1 className="text-2xl font-bold bg-blue-500 text-white flex justify-center items-center h-16">
        Pokemons
      </h1>
      {pokemons ? (
        <PokemonsList pokemons={pokemons} />
      ) : (
        <p>No pokemons found</p>
      )}
    </section>
  );
};

export default Pokemons;
