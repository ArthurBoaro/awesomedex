import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    font-family: Verdana, Geneva, sans-serif;
    background-color: #6567d3;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 4px 4px 6px #a48eff;
    padding: 10px;
    max-height: 400px;
`;

const Header = styled.div`
    color: #FFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const IdArea = styled.div`
    font-size: 14px;
    font-weight: bold;
    border-style: solid;
    border-width: 2px;
    border-color: #132149;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    z-index: 100;
    background-color: #6567d3;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NameArea = styled.div`
    text-transform: capitalize;
    font-size: 18px;
    font-weight: bold;
    border-style: solid;
    border-width: 2px;
    border-color: #132149;
    height: 34px;
    min-width: 160px;
    margin-right: -18px;
    margin-left: -18px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const IconArea = styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: #132149;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    z-index: 100;
    background-color: #132149;
`

const animation = keyframes`
    0% {
        opacity:1;
    }
    45% {
        opacity:1;
    }
    55% {
        opacity:0;
    }
    100% {
        opacity:0;
    }
`

const IconAnimation = styled.div`
    position: relative;
`

const IconImg0 = styled.img`
    position: absolute;
    max-width: 100%;
`

const IconImg1 = styled.img`
    position: absolute;
    max-width: 100%;
    animation-name: ${animation};
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
`

const ImgArea = styled.div`
    margin-top: 10px;
    border-style: solid;
    border-color: #132149;
    border-radius: 8px;
    border-width: 2px;

    img {
        max-width: 100%;
        display: block;
        margin: 1rem auto 1rem auto;
    }
`

const InfoArea = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    background-color: #132149;
    border-radius: 8px;
    border-style: none;

    color: #FFF;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    height: 36px;
    line-height: 20px;
    margin: 2px auto 2px auto;
    padding: 2px 16px 2px 16px;
    text-align: center;
    transition: color 100ms;
    touch-action: manipulation;

    &:hover,
    &:focus {
    background-color: #a48eff;
    color: #000014;
    }
`

export { Container, Header, IdArea, NameArea, IconArea, IconImg0, IconImg1, IconAnimation,ImgArea, InfoArea, Button }