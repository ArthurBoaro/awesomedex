import styled from 'styled-components';


const Container = styled.div`
    font-family: Verdana, Geneva, sans-serif;
    background-color: #000014;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Header = styled.div`

    img {
        max-width: 50%;
        display: block;
        margin: 0px auto 20px auto;
    }
`

const NotFoundArea = styled.div`
    background-color: #6567d3;
    border-radius: 10px;
    box-shadow: 5px 5px 8px #a48eff;
    padding: 10px 100px;
    margin: 40px;
    max-height: 600px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;  
`

const NotFoundImg = styled.div`
    margin-top: 20px;

    img {
        max-width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 0px;
        margin-bottom: 10px;
    }
`

const NotFoundText = styled.div`
    margin-bottom: 20px;
    color: #FFF;
    font-size: 50px;
    font-weight: 500;
`

const Footer = styled.div`
    color: #FFF;
    margin-top: 5px;
    text-align: right;
    font-style: italic;
`

export { Container, Header, NotFoundArea, NotFoundImg, NotFoundText, Footer }