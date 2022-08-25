import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

const Container = styled.div`
    background-color: #000014;
    min-height: 100vh;
    font-family: Verdana, Geneva, sans-serif;
`;

const Header = styled.div`

    img {
        max-width: 50%;
        display: block;
        margin: 0px auto 20px auto;
    }
`

const SearchBarArea = styled.div`
    font-family: Verdana, Geneva, sans-serif;
    width: 30%;
    margin: 60px auto 40px auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`


const SearchBar = styled.div`
    width: 100%;
    display: flex;
`

const SearchTerm = styled.input`
    width: 100%;
    border: 6px solid #6567d3;
    border-right: none;
    padding: 6px;
    height: 20px;
    border-radius: 8px 0 0 8px;
    box-shadow: 4px 4px 6px #a48eff;
    color: #000014;
`

const SearchIcon = styled(Search)`
    padding: 4px;
    width: 42px;
    height: 34px;
    border: 1px solid #6567d3;
    background-color: #6567d3;
    color: #FFF;
    border-radius: 0 8px 8px 0;
    box-shadow: 2px 4px 6px #a48eff;
    cursor: pointer;
`

const PokemonsList = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: space-between;
    justify-content: center;
    border-radius: 8px;
    margin: 20px auto auto 20px;
    gap: 20px;
`


const Footer = styled.div`
    color: #FFF;
    margin: 1rem;
    text-align: right;
    font-style: italic;
`

export { Container, Header, SearchBarArea, SearchBar, SearchTerm, SearchIcon, PokemonsList, Footer }