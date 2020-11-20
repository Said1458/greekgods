import React from 'react';
import styled from 'styled-components';


function GetADuck(props){

    const H3 = styled.h3`
    font-family: cinzel;
    font-size: 36px;
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
    `

    return(
        <div>
            <H3>Congrats, you succesfully sacrificed this duck... </H3>
            <RuningText>Our collegues are working very hard to forward your request ASAP.</RuningText>
            <img height="400px" width="400px" src={props.randomimg} />
         
        </div>
    )
}

export default GetADuck;