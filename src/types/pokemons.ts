interface Results {
  name: string;
  url: string;
}
export interface Pokemon {
  results: Results[];
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface PokemonSprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: {
      front_default: string | null;
      front_female: string | null;
    };
    home: {
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
    official_artwork: {
      front_default: string | null;
      front_shiny?: string | null;
    };
    showdown: {
      back_default: string | null;
      back_female: string | null;
      back_shiny: string | null;
      back_shiny_female: string | null;
      front_default: string | null;
      front_female: string | null;
      front_shiny: string | null;
      front_shiny_female: string | null;
    };
  };
}

export interface SinglePokemon {
  id: number;
  height: number;
  weight: number;
  types: Type[];
  name: string;
  sprites: PokemonSprites;
}
