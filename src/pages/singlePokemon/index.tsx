import { useGetSinglePokemonQuery } from "../../../store/endPoints/pokemons/pokemon";
import { useNavigate, useParams } from "react-router";

const SinglePokemon = () => {
  const params = useParams();
  const { id } = params;
  const { data, isLoading, isFetching } = useGetSinglePokemonQuery(id || "");
  const dataLoading = isLoading || isFetching;
  const navigate = useNavigate();

  if (dataLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-100">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <header className="text-2xl font-bold bg-blue-500 text-white flex justify-center items-center h-16">
        <h1>{data.name}</h1>
      </header>

      <div
        className="w-full flex flex-col justify-center items-center gap-4 p-[5rem]"
        style={{ padding: "0 1rem" }}
      >
        <img
          src={data?.sprites.other?.dream_world?.front_default ?? ""}
          alt={`${data?.name} Pokemon`}
          loading="lazy"
          className="max-w-[100%]"
        />
        <div className="w-full flex justify-center items-center gap-8 bg-gray-200">
          <hr />
        </div>
        <div className="w-full mt-4 justify-center items-center gap-4">
          <div className="flex justify-between items-center w-full border-b border-gray-200">
            <p className="font-bold">Name</p>
            <p>{data.name}</p>
          </div>
          <div className="flex justify-between items-center w-full border-b border-gray-200">
            <p className="font-bold">Height</p>
            <p>{data.height} cm</p>
          </div>
          <div className="flex justify-between items-center w-full border-b border-gray-200">
            <p className="font-bold">Weight</p>
            <p>{data.weight} kg</p>
          </div>
          <div className="flex justify-between items-center w-full border-b border-gray-200">
            <p className="font-bold">Types</p>
            <p className="capitalize">
              {data.types.map((type, index) => (
                <span key={index}>{type.type.name} </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-4 p-[5rem]">
        <button
          className="flex justify-center items-center gap-4 bg-blue-500 text-white cursor-pointer"
          style={{ padding: "0 1rem", margin: "1rem 0" }}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SinglePokemon;
