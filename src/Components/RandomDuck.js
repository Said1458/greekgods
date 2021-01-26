import React from 'react';
import styled from 'styled-components';
import App from '../App';
import '../index.css'



function GetADuck(props){

    const StyleDiv= styled.div`
    background-color: #131515;
    color: #fff;`
    

    const H3 = styled.h3`
    font-family: cinzel;
    font-size: 50px;
    letter-spacing: 0.16px;
    margin: 24px auto 0px;
    text-align: center;
    color: #9EFFEA;
`
    const SubTitle = styled.p`
    max-width: 450px;
    margin: 16px auto;
    font-family: raleway;
    font-weight: 700;
    `

    const RuningText = styled.p`
        max-width: 450px;
        margin: auto;
        font-family: raleway;
        font-size: 23px
    `
    console.log("goat?", props)

    return(
        <StyleDiv>
            <H3>Congrats, you successfully sacrificed this duck... </H3>
            <br></br>
            <RuningText>Our collegues are working very hard to deliver your request to Mount Olympus.</RuningText>
            <br></br>
            <img width="500px" src={props.randomimg} />
         
        </StyleDiv>
    )
}

export default GetADuck;