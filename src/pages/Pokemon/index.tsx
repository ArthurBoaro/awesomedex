import * as C from './styles';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import AwesomedexLogo  from '../../assets/AwesomedexLogo.png';
import { Link } from 'react-router-dom';
import * as Pokemons from '../../services/pokemons';
import { PokemonDetails } from '../../components/PokemonDetails';
import { PokemonFullInfo } from '../../types/PokemonFullInfo'

const Pokemon = () => {
    const { id } = useParams<string>();
    const [pokemon, setPokemon] = useState<PokemonFullInfo>({
        id: 0,
        pokedexID: 0,
        name: '',
        type0: '',
        type1: '',
        description: '',
        height: 0,
        weight: 0,
        hp: 0,
        attack: 0,
        special_attack: 0,
        defense: 0,
        special_defense: 0,
        speed: 0,
        front_sprite: '',
        back_sprite: '',
        front_artwork: ''
    });

    useEffect(() => {
        getPokemonByID(id);
    },[id]);

    const getPokemonByID = async (id) => {
        const pokemonInfo = await Pokemons.getPokemonByID(id);
        setPokemon(pokemonInfo);
    }



    return (
        <C.Container>
        <Link to ={'/'}>
            <C.Header>
                <img src={AwesomedexLogo} alt='logo'/>
            </C.Header>
        </Link>
        <C.PokemonDetailsArea>
            <PokemonDetails
                id={pokemon.id}
                pokedexID={pokemon.pokedexID}
                name={pokemon.name}
                type0={pokemon.type0}
                type1={pokemon.type1}
                description={pokemon.description}
                height={pokemon.height}
                weight={pokemon.weight}
                hp={pokemon.hp}
                attack={pokemon.attack}
                special_attack={pokemon.special_attack}
                defense={pokemon.defense}
                special_defense={pokemon.special_defense}
                speed={pokemon.speed}
                front_sprite={pokemon.front_sprite}
                back_sprite={pokemon.back_sprite}
                front_artwork={pokemon.front_artwork}
            />

        </C.PokemonDetailsArea>


        <C.Footer>WebApp built only for educational proporses.</C.Footer>
    </C.Container>
    );
};

export { Pokemon };