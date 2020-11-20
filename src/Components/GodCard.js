import React from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";


function GodCard (props) {

    const CardImage = styled.div`
        background-image: url(${props.img});
        background-size: cover;
        height: 400px;
        width: 300px;
        border: none;
        margin: 16px;

        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding: 16px;

    `
    const CardTitle = styled.h2`
        text-shadow: 0px 0px 10px #000;
        font-family: cinzel;
        letter-spacing: 0.3px;
        color: #fff;
        margin: auto;
    `

    const PowerText = styled.p`
        font-family: raleway;
        color: #fff;
        text-shadow: 0px 0px 10px #000;
        margin: 0px auto;
        font-weight: 500;
    `
    //console.log(props)

    return(
    <div className="GodCard">
            <CardImage>
                <div>
                    <CardTitle>{props.name}</CardTitle>
                    <PowerText>{props.power}</PowerText>
                <Link to="/contact"> <button> I need {props.name}'s help</button> </Link>
                </div>
                
            {/* <h1>{props.name}</h1> */}
            
            </CardImage>
            {/* <div style={{width: "400px", height: "300px",  backgroundSize: "cover", backgroundImage: `url(${props.img})`}}>
            <h1>{props.name}</h1>
            </div> */}
    </div>

    )
}

export default GodCard;