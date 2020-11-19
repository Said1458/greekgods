import React from 'react';


function GodCard (props) {

    return(
    <div>
        <h1>{props.name}</h1>
        <img src={props.img} />
        <h2>Powers: {props.power}</h2>
        <h2>symbol: {props.symbol}</h2>
    </div> 
    )
}

export default GodCard;