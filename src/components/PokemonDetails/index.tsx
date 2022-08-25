import * as C from './styles';
import { PokemonFullInfo } from '../../types/PokemonFullInfo';
import { useState} from 'react';

export const PokemonDetails = (pokemon: PokemonFullInfo) => {
    console.log("Renderizou")

    const [changeImg, setChangeImg] = useState<boolean>(true);
    let changeImgText: string = "View ArtWork";
    
    if(changeImg) {
        changeImgText = "View ArtWork";
    } else {
        changeImgText = "View Sprites";
    }

    const handleImg = () => {
        setChangeImg(!changeImg);
    }


    return (
        <C.Container>
            <C.Header>{pokemon.name}</C.Header>
            <C.InfoArea>
                <C.ImgArea>
                    { changeImg ? (
                        <C.ImgSpriteArea>
                            <C.FrontSprite src={pokemon.front_sprite} alt='pokemonFrontSprite'></C.FrontSprite>
                            <C.BackSprite src={pokemon.back_sprite} alt='pokemonBackSprite'></C.BackSprite>
                        </C.ImgSpriteArea>
                    ) : (
                        <C.FrontArtWork src={pokemon.front_artwork} alt='pokemonArtWork'></C.FrontArtWork>
                    )}
                    <C.Button onClick={handleImg}>{changeImgText}</C.Button>
                </C.ImgArea>
                <C.DetailsArea>
                    <C.InfoItemArea01>
                        <C.InfoItemArea02><b>Pokedex ID: </b>{pokemon.pokedexID}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Primary Type: </b>{pokemon.type0}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Secundary Type: </b>{pokemon.type1}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Height: </b>{pokemon.height}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Weight: </b>{pokemon.weight}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>HP: </b>{pokemon.hp}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Attack: </b>{pokemon.attack}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Special Attack: </b>{pokemon.special_attack}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Defense: </b>{pokemon.defense}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Special Defense: </b>{pokemon.special_defense}</C.InfoItemArea02>
                        <C.InfoItemArea02><b>Speed: </b>{pokemon.speed}</C.InfoItemArea02>
                    </C.InfoItemArea01>
                </C.DetailsArea> 
            </C.InfoArea>

            {pokemon.description &&
                <C.DescArea>
                    <C.DescHeader>About</C.DescHeader>
                    <C.DescText>{pokemon.description}</C.DescText>
                </C.DescArea>  
            }
            



        </C.Container>
    );
};