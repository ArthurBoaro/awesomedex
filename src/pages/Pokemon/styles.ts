import styled from 'styled-components';


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

const PokemonDetailsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Footer = styled.div`
    color: #FFF;
    margin: 1rem;
    text-align: right;
    font-style: italic;
`

export { Container, Header, PokemonDetailsArea, Footer }