import { PokemonFullInfo } from "../types/PokemonFullInfo"
import { PokemonCardInfo } from "../types/PokemonCardInfo";

const getAllPokemons = async () => {
    let list: PokemonFullInfo[] = [];
    const res = await fetch(`${process.env.REACT_APP_POKEMON_API}`);
    const pokemonList = await res.json();
    pokemonList.forEach(pokemon => {
        list.push({
            id: pokemon.id,
            pokedexID: pokemon.pokedexID,
            name: pokemon.name,
            type0: pokemon.type0,
            type1: pokemon.type1,
            description: pokemon.description,
            height: pokemon.height,
            weight: pokemon.weight,
            hp: pokemon.hp,
            attack: pokemon.attack,
            special_attack: pokemon.special_attack,
            defense: pokemon.defense,
            special_defense: pokemon.special_defense,
            speed: pokemon.speed,
            front_sprite: pokemon.front_sprite,
            back_sprite: pokemon.back_sprite,
            front_artwork: pokemon.front_artwork
        });
    });
    return list;
}

const getAllPokemonsCardInfo = async () => {
    let list: PokemonCardInfo[] = [];
    const res = await fetch(`${process.env.REACT_APP_POKEMON_API}`);
    const pokemonList = await res.json();
    pokemonList.forEach(pokemon => {
        list.push({
            id: pokemon.id,
            pokedexID: pokemon.pokedexID,
            name: pokemon.name,
            type0: pokemon.type0,
            type1: pokemon.type1,
            front_sprite: pokemon.front_sprite
        });
    });
    return list;
}

const getPokemonByID = async (id: number | string | undefined) => {
            
    const res = await fetch(`${process.env.REACT_APP_POKEMON_API}`+ id);
    const getPokemon = await res.json();
    const pokemon: PokemonFullInfo = {
        id: getPokemon.id,
        pokedexID: getPokemon.pokedexID,
        name: getPokemon.name,
        type0: getPokemon.type0,
        type1: getPokemon.type1,
        description: getPokemon.description,
        height: getPokemon.height,
        weight: getPokemon.weight,
        hp: getPokemon.hp,
        attack: getPokemon.attack,
        special_attack: getPokemon.special_attack,
        defense: getPokemon.defense,
        special_defense: getPokemon.special_defense,
        speed: getPokemon.speed,
        front_sprite: getPokemon.front_sprite,
        back_sprite: getPokemon.back_sprite,
        front_artwork: getPokemon.front_artwork
    };

    return pokemon;
}

export { getAllPokemons, getAllPokemonsCardInfo, getPokemonByID }