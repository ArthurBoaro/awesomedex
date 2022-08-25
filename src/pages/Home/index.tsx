import { useEffect, useState } from 'react';
import * as C from './styles';
import AwesomedexLogo  from '../../assets/AwesomedexLogo.png';
import { PokemonCard } from '../../components/PokemonCard';
import * as Pokemons from '../../services/pokemons';
import { PokemonCardInfo } from '../../types/PokemonCardInfo';
import { Link } from 'react-router-dom';

const Home = () => {
  const [pokemons, setPokemons] = useState<PokemonCardInfo[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const getPokemons = await Pokemons.getAllPokemonsCardInfo();
    const sortedPokemons = [...getPokemons].sort((x,y) => {
      if(x.pokedexID > y.pokedexID) { return 1;}
      if(x.pokedexID < y.pokedexID) { return -1;}
      return 0;
    });
    setPokemons(sortedPokemons);
  }

  const filteredPokemons = search.length > 0 ? pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase())) : [];

  return (
    <C.Container>
      <Link to ={'/'}>
        <C.Header>
          <img src={AwesomedexLogo} alt='logo'/>
        </C.Header>
      </Link>      

      <C.SearchBarArea>
        <C.SearchBar>
          <C.SearchTerm
            type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)} value={search}>
          </C.SearchTerm>
          <C.SearchIcon></C.SearchIcon>
        </C.SearchBar>
      </C.SearchBarArea>
      

      { search.length > 0 ? (
        <C.PokemonsList>
          {filteredPokemons.map((item, index) =>(
            <PokemonCard 
              key={index}
              id={item.id}
              pokedexID={item.pokedexID}
              name={item.name}
              type0={item.type0}
              type1={item.type1}
              front_sprite={item.front_sprite}
            />
            ))}
        </C.PokemonsList>
      ) : (
        <C.PokemonsList>
          {pokemons.map((item, index) =>(
            <PokemonCard 
              key={index}
              id={item.id}
              pokedexID={item.pokedexID}
              name={item.name}
              type0={item.type0}
              type1={item.type1}
              front_sprite={item.front_sprite}
            />
          ))}
        </C.PokemonsList>
      )}

      <C.Footer>WebApp built only for educational proporses.</C.Footer>

    </C.Container>
  );
}

export { Home };
