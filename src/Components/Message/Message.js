import React from 'react';

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
        width: "100%",
        height: "400px",
        background:`url(${god.img})`,

    }
    return (
        <div className="Message">
            <div style={imageStyle}></div>
            <h2>{god.name}</h2>
            <p>{god.power}</p>
            <form>

                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    City:
                    <input type="text" name="name" />
                </label>
                <label>
                    Subject:
                    <input type="text" name="name" />
                </label>
                <textarea>
                    Message
                </textarea>
                <input type="submit" value="Submit" />
            </form>


        </div>
    );
}

export default Massage;