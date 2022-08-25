import * as C from './styles';
import { PokemonCardInfo } from '../../types/PokemonCardInfo';
import { Link } from 'react-router-dom';

export const PokemonCard = (pokemon: PokemonCardInfo) => {

    let pokemonIcon0: string = '';
    let pokemonIcon1: string = '';
    let iconType0: string = '';
    let iconType1: string = '';

    if (pokemon.type1 !== 'none') {
        iconType0 = pokemon.type0  + "Type.ico";
        iconType1 = pokemon.type1  + "Type.ico";
        pokemonIcon0 = require("../../assets/" + iconType0);
        pokemonIcon1 = require("../../assets/" + iconType1);
    } else {
        iconType0 = pokemon.type0  + "Type.ico";
        pokemonIcon0 = require("../../assets/" + iconType0);
    }
    
    
    return (
        <C.Container>

            {pokemon.type1 !== 'none' ? (
                <C.Header>
                    <C.IdArea>#{pokemon.id}</C.IdArea>
                    <C.NameArea>{pokemon.name}</C.NameArea>
                    <C.IconArea>
                        <C.IconAnimation>
                            <C.IconImg0 src={pokemonIcon0} alt='pokemonIcon0'></C.IconImg0>
                            <C.IconImg1 src={pokemonIcon1} alt='pokemonIcon1'></C.IconImg1>
                        </C.IconAnimation>
                        
                    </C.IconArea>
            </C.Header>
            ) : (
                <C.Header>
                    <C.IdArea>#{pokemon.id}</C.IdArea>
                    <C.NameArea>{pokemon.name}</C.NameArea>
                    <C.IconArea>
                        <C.IconAnimation>
                            <C.IconImg0 src={pokemonIcon0} alt='pokemonIcon0'></C.IconImg0>
                        </C.IconAnimation>
                    </C.IconArea>
            </C.Header>
            )}

           <C.ImgArea><img src={pokemon.front_sprite} alt={pokemon.name}/></C.ImgArea>
            <C.InfoArea>
                <Link to={'/pokemon/' + pokemon.id}>
                    <C.Button>View Details</C.Button>
                </Link>
            </C.InfoArea>
        </C.Container>
    );
}