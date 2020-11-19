import React from 'react';
import styled from 'styled-components'

const god =  
    {  
       name:"Aphrodite",
       img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53653317-d541-48a0-8252-bc533c980e00/ddp53x4-bacaec45-9e44-42c5-a34a-e6859e0fae88.png/v1/fill/w_600,h_814,strp/aphrodite___greek_mythology_by_yliade_ddp53x4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTM2NTMzMTctZDU0MS00OGEwLTgyNTItYmM1MzNjOTgwZTAwXC9kZHA1M3g0LWJhY2FlYzQ1LTllNDQtNDJjNS1hMzRhLWU2ODU5ZTBmYWU4OC5wbmciLCJoZWlnaHQiOiI8PTgxNCIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvNTM2NTMzMTctZDU0MS00OGEwLTgyNTItYmM1MzNjOTgwZTAwXC95bGlhZGUtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.eOQSL4Nlp04qEC51BfYx6mB0rBzbKoVkk64lqTjqUZY",
       romanname:"Venus",
       power:"Love, beauty, procreation",
       symbol:"Eros (winged godling), conch-shell",
    }

    

function Massage() {
    const imageStyle = {
        width: "50%",
        height: "400px",
        background:`url(${god.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        margin: "28px 0"
    }

    const Input = styled.input`
        background: #9EFFEA;
        border: none;
        margin: 16px;
        padding: 8px 16px;
        color: #1F2322;
    `
    const H2 = styled.h2`
        font-family: cinzel;
        letter-spacing: 0.16px;
        text-align: center;
        color: #9EFFEA;
    `

    const Description = styled.p`
        max-width: 450px;
        `

    return (
        <div className="Message" style={{backgroundColor: "#1F2322", color: "#fff", textAlign: "center", display: "flex"}}>
            <div style={imageStyle}></div>
            <div className="wraper" style={{padding: "24px 24px 24px 4px"}} >
            <H2>{god.name}</H2>
            <p>{god.power}</p>
            <Description>She is the goddess of women, marriage, family and …he is the daughter of the Titans Cronus and Rhea.</Description>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label><br/>
                    <label>
                        City:
                        <input type="text" name="name" />
                    </label><br/>
                    <label>
                        Subject:
                        <input type="text" name="name" />
                    </label><br/>
                    <textarea>
                        Message
                    </textarea><br/>
                    <Input type="submit" value="Submit" />
                </form>

            </div>
            


        </div>
    );
}

export default Massage;