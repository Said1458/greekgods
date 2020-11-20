import React from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router,Link} from "react-router-dom";
import GetADuck from '../../Components/RandomDuck';
import GodPage from '../GodPage';

const god =  
    {  
       name:"Aphrodite",
       img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddp53x4-bacaec45-9e44-42c5-a34a-e6859e0fae88.png/v1/fill/w_600,h_814,strp/aphrodite___greek_mythology_by_yliade_ddp53x4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTM2NTMzMTctZDU0MS00OGEwLTgyNTItYmM1MzNjOTgwZTAwXC9kZHA1M3g0LWJhY2FlYzQ1LTllNDQtNDJjNS1hMzRhLWU2ODU5ZTBmYWU4OC5wbmciLCJoZWlnaHQiOiI8PTgxNCIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNTM2NTMzMTctZDU0MS00OGEwLTgyNTItYmM1MzNjOTgwZTAwXC95bGlhZGUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.eOQSL4Nlp04qEC51BfYx6mB0rBzbKoVkk64lqTjqUZY",
       romanname:"Venus",
       power:"Love, beauty, procreation",
       symbol:"Eros (winged godling), conch-shell",
    }

    

class Massage extends React.Component {
    constructor(props) {
        super(props)
    }

   
render() {
    const Message = styled.div`
        background-color: #131515;
        height: 100vh;
        color: #fff;
        text-align: center; 
        display: flex;
    `
    const imageStyle = {
        width: "50%",
        height: "93%",
        background:`url(${this.props.picture})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        margin: "28px 0"
    }
    return (
        <Message >
            <div style={imageStyle}></div>
            <div className="wraper" style={{padding: "24px 24px 24px 4px", width: "50%", margin:"auto"}} >
            <GodPage god={god} />
                
            {/* <GetADuck /> */}


            </div>

        </Message>
    );

}

}

export default Massage;



