const POKEMON_BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemonList = async (limit: number, offset?: number) => {
  try {
    const response = await fetch(
      `${POKEMON_BASE_URL}pokemon?limit=${limit || 20}&offset=${offset || 0}`
    );

    const reults = await response.json();

    const detailedPokemonList = await Promise.all(
      reults.results.map((pokemon: any) =>
        fetch(pokemon.url).then((res) => res.json())
      )
    );
    return detailedPokemonList;
  } catch (error) {
    throw new Error("Failed to fetch Pokémon list");
  }
};

export const searchPokemonApi = async (params: string) => {
  try {
    const response = await fetch(`${POKEMON_BASE_URL}${params}`);
    const reults = await response;
    return reults.json();
  } catch (error) {
    throw new Error("Failed to fetch Pokémon list");
  }
};
