import React from 'react';


function GetADuck(props){

    return(
        <div>
            <h1>Congrats, you succesfully sacrificed this duck... </h1>
            <h2>Our collegues are working very hard to forward your request ASAP.</h2>
         <img src={props.randomimg} />
         
        </div>
    )
}

export default GetADuck;