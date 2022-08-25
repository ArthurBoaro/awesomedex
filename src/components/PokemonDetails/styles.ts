import styled from 'styled-components';


const Container = styled.div`
    font-family: Verdana, Geneva, sans-serif;
    background-color: #6567d3;
    color: #FFF;
    border-radius: 8px;
    box-shadow: 4px 4px 8px #a48eff;
    padding: 10px;
    margin: 40px;
    max-height: 1000px;
    max-width: 800px;
`

const Header = styled.div`
    color: #FFF;
    text-transform: capitalize;
    font-size: 32px;
    font-weight: bold;
    display: flex;
    flex-flow: row wrap;
    align-items: space-between;
    justify-content: center;
    margin: 20px auto auto 20px;
`

const InfoArea = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: space-between;
    justify-content: center;
    margin: 20px;
`
const DetailsArea = styled.div`
    color: #FFF;
    text-transform: capitalize;
    font-size: 20px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-radius: 8px;
    border-color: #132149;
    border-width: 2px;
    width: 240px;
    height: 400px;
    margin: 20px;
    padding: 20px;
    gap: 4px;
`

const InfoItemArea01 = styled.div`
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`

const InfoItemArea02 = styled.div`
    display: flex;
    flex-flow: row;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
`

const ImgArea = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: space-between;
    justify-content: center;
    border-style: solid;
    border-radius: 8px;
    border-color: #132149;
    border-width: 2px;
    width: 240px;
    height: 400px;
    padding: 20px;
    margin: 20px auto auto 20px;
    gap: 20px;
`

const ImgSpriteArea = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: space-between;
    justify-content: center;
    gap: 10px;
`

const Button = styled.button`
    background-color: #132149;
    border-radius: 8px;
    border-style: none;

    color: #FFFFFF;
    cursor: pointer;
    font-family: Verdana, Geneva, sans-serif; 
    font-size: 14px;
    height: 36px;
    line-height: 20px;
    margin: 20px auto 0px auto;
    padding: 2px 16px 2px 16px;
    text-align: center;
    transition: color 100ms;
    touch-action: manipulation;

    &:hover {
    background-color: #a48eff;
    color: #000014;
    }
`


const FrontSprite = styled.img`
    height: 140px;    
    width: 180px;
    display: block;
    margin: 10px auto 0px auto;
`

const BackSprite = styled.img`
    height: 140px;    
    width: 180px;
    display: block;
    margin: 0px auto 10px auto;
`

const FrontArtWork = styled.img`
    max-width: 80%;
    display: block;
    margin: 55px auto 60px auto;
`

const DescArea = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    margin: 30px;
`

const DescHeader = styled.div`
    text-transform: capitalize;
    font-size: 32px;
    font-weight: bold;
`

const DescText = styled.div`
    font-size: 20px;
`

export { Container, Header, InfoArea, DetailsArea, InfoItemArea01, InfoItemArea02, ImgArea,
    ImgSpriteArea, Button, FrontSprite, BackSprite, FrontArtWork,  DescArea, DescHeader, DescText }