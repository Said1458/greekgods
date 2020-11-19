import React from 'react';
import GodCard from './GodCard';


function GodsList (props) {


    return(
        <div>
         {props.godattributes.map(god => <GodCard name={god.name} img={god.img}
          symbol={god.symbol} power={god.power} description={god.description}
         />)}
        </div>
    )
}

export default GodsList