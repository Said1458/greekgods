import React from 'react';
import styled from 'styled-components';

// import GetADuck from '../../Components/RandomDuck';
import GodPage from '../GodPage';

// const god =  
//     {  
//        name:"Aphrodite",
//        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddp53x4-bacaec45-9e44-42c5-a34a-e6859e0fae88.png/v1/fill/w_600,h_814,strp/aphrodite___greek_mythology_by_yliade_ddp53x4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTM2NTMzMTctZDU0MS00OGEwLTgyNTItYmM1MzNjOTgwZTAwXC9kZHA1M3g0LWJhY2FlYzQ1LTllNDQtNDJjNS1hMzRhLWU2ODU5ZTBmYWU4OC5wbmciLCJoZWlnaHQiOiI8PTgxNCIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNTM2NTMzMTctZDU0MS00OGEwLTgyNTItYmM1MzNjOTgwZTAwXC95bGlhZGUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.eOQSL4Nlp04qEC51BfYx6mB0rBzbKoVkk64lqTjqUZY",
//        romanname:"Venus",
//        power:"Love, beauty, procreation",
//        symbol:"Eros (winged godling), conch-shell",
//     }

    

class Massage extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            coosenGod: {
                desciption: "As the God of War he represents the distasteful aspects of brutal warfare and slaughter.",
img: "/static/media/ares.810f885a.png",
name: "Ares",
power: "War, courage, battlelust",
symbol: "Helm",
            }
        }
    }
    componentDidMount() {
        this.chooseG(this.props.match.params.name);
        console.log(this.chooseG(this.props.match.params.name))
    }

    // componentDidUpdate(prevProps, prevSate) {
    //     if( prevSate.chooseGod.name !== this.state.chooseGod.name) {
    //         this.chooseG(this.props.match.params.name);
    //     }
    // }
    chooseG(name) {
        const G = this.props.allGods.filter((god) => god.name === name)
        this.setState({ coosenGod: G[0] })
        console.log("g",G)
        //console.log("god", this.props.allGods.filter((god) => {console.log(god[0]); return god.name === name}))
        // return this.props.allGods.filter((god) => god.name === name)
      }

   
render() {



    const Message = styled.div`
        background-color: #131515;
        height: 100vh;
        color: #fff;
        text-align: center; 
        display: flex;
    `

    // const ImageDiv =styled.div`
    //     width: 50%;
    //     height: 93%;
    //     background-image:`url(${this.state.chooseGod.img})`;
    //     background-size: cover;
    //     background-position: center top;
    //     margin: 28px 0;
    // `

    const imageStyle = {
        width: "50%",
        height: "93%",
        background:`url(${this.state.coosenGod.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        margin: "28px 0"
    }
    // this.chooseGod(this.props.match.params.name)
    console.log("props", this.props);
    //const god = this.props.match.params.name;
    return (
        <Message >
            {this.state.chooseGod && <div style={imageStyle}></div>}
            <div style={imageStyle}></div>
            <div className="wraper" style={{padding: "24px 24px 24px 4px", width: "50%", margin:"auto"}} >
            {this.state.coosenGod && <GodPage god={this.state.coosenGod} />}
                
            {/* <GetADuck /> */}


            </div>

        </Message>
    );

}

}

export default Massage;



