import styled from 'styled-components';

// 27282F
const Container = styled.div`
    background-color: #00000e;
    min-height: 100vh;

`;

const Header = styled.div`

    img {
        max-width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        margin-bottom: 10px;
    }
`

const SearchBar = styled.input`

`


const PokemonsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-radius: 10px;
    margin: 0 50px 0;
`


const Footer = styled.div`
    color: #FFF;
    margin: 1rem;
    text-align: right;
    font-style: italic;

`

export { Container, Header, SearchBar, PokemonsList, Footer }