// Script to get Pokemon's information from the PokeAPI and save to Postgres database using the created API.


// Initialze Variables
const axios = require('axios');
const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const dbApi = 'http://localhost:3003/pokemons/';
const totalPokemons = 151;
let i = 1;
let j = 0;
let allPokemons = [];


// Function to get de Pokemon's info by ID
const getPokemonById = async (url) => {
    try {
        const getPokemonUrlId = url;
        setTimeout(() => { console.log("Pause") }, 1000)
        let res = await axios.get(getPokemonUrlId);
        let data = res.data;
        return data;
    } catch (error) {
        console.log(error)
    }
};


// Function to get all Pokemon's info
const getAllPokemons = async () => {

    while(i <= totalPokemons) {
        let getPokemonUrl = pokeApiUrl + i;
        let dataPokemon = await getPokemonById(getPokemonUrl);
        allPokemons.push(dataPokemon);
        i = i + 1;
    }
};


// Function to save Pokemon's info to database by ID
const postPokemonById = async (id) => {
    let pokemonType1 = "";
    if (typeof allPokemons[id].types[1] !== 'undefined'){
        pokemonType1 = allPokemons[id].types[1].type.name;
    } else {
        pokemonType1 = "none";
    }

    try {
      let res = await axios.post(dbApi, {
        name: allPokemons[id].name,
        pokedexID: allPokemons[id].id,
        type0: allPokemons[id].types[0].type.name,
        type1: pokemonType1,
        height: allPokemons[id].height,
        weight: allPokemons[id].weight,
        hp: allPokemons[id].stats[0].base_stat,
        attack: allPokemons[id].stats[1].base_stat,
        special_attack: allPokemons[id].stats[3].base_stat,
        defense: allPokemons[id].stats[2].base_stat,
        special_defense: allPokemons[id].stats[4].base_stat,
        speed: allPokemons[id].stats[5].base_stat,
        front_sprite: allPokemons[id].sprites.front_default,
        back_sprite: allPokemons[id].sprites.back_default,
        front_artwork: allPokemons[id].sprites.other['official-artwork'].front_default
      })
    } catch (error) {
        console.log(error);
    }
}


// Function to save all Pokemon's info to database
const postPokemons = async () => {
    i = 1;
    while(i <= totalPokemons) {
        await postPokemonById(j);
        console.log("Created!")
        i = i + 1;
        j = j + 1;
    }
    
};


// Self Invoking Function
(async () => {
    try {
      await getAllPokemons()
      await postPokemons()
    } catch (error) {
      console.log(error)
    }
  })()