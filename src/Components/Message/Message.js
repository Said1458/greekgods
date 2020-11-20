import React from 'react';
import styled from 'styled-components';
import GetADuck from '../../Components/RandomDuck';

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
        height: "93%",
        background:`url(${god.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        margin: "28px 0"
    }

    const Input = styled.input`
        font-family: cinzel;
        font-weight: bolder;
        font-size: 16px;
        background: #9EFFEA;
        border: none;
        margin-top: 16px;
        padding: 8px 16px;
        color: #1F2322;
        border: solid 1px #9EFFEA;
        &:hover {
            background-color: transparent; 
            border: solid 1px #9EFFEA;
            color: #9EFFEA;
          }
          &:focus {
            outline: none;
         }
          
    `
    const H2 = styled.h2`
        font-family: cinzel;
        font-size: 44px;
        letter-spacing: 0.16px;
        margin: auto;
        text-align: center;
        color: #9EFFEA;
    `

    const Description = styled.p`
        max-width: 450px;
        margin: auto;
        font-family: raleway;
    `
    const Powers = styled.p`
        max-width: 450px;
        margin: 16px auto;
        font-family: raleway;
        font-weight: 700;
    `
    const GodForm = styled.form`
         
        margin: 24px auto 0;
        width: 100%;
       

    `

    const FormLabels = styled.label`
        font-size: 12px;
        text-align: left;
        display: inline-block;
        width: 70%
       
    `
    const FormInputs = styled.input`
        background-color: transparent;
        font-family: raleway;
        font-weight: 500;
        letter-spacing: 0.2px;
        color: #fff;
        border: none;
        border-bottom: solid 1px #fff;
        width: 100%;
        margin: 4px auto 8px;
        font-size: 24px;
        &:focus {
            background-color: rgba(200, 200, 200, 0.1);
            outline: none;
            
          }
    `
    const Textarea = styled.textarea`
    background-color: transparent;
    font-family: raleway;
    font-weight: 500;
    letter-spacing: 0.2px;
    color: #fff;
    border: none;
    border-bottom: solid 1px #fff;
    width: 100%;
    height: 26px;
    margin: 4px auto 8px;
    font-size: 24px;
    &:focus {
        background-color: rgba(200, 200, 200, 0.1);
        outline: none;
        
      }
    `

    const Message = styled.div`
        background-color: #131515;
        height: 100vh;
        color: #fff;
        text-align: center; 
        display: flex;
    `

    const handleSubmit = () => {

    }


    return (
        <Message >
            <div style={imageStyle}></div>
            <div className="wraper" style={{padding: "24px 24px 24px 4px", width: "50%", margin:"auto"}} >
            <H2>{god.name}</H2>
            <hr style={{width:"20%"}} />
            <Powers>{god.power}</Powers>
            <Description>She is the goddess of women, marriage, family and …he is the daughter of the Titans Cronus and Rhea.</Description>
            {/* <div style={{margin:"auto"}}> */}
                <GodForm>
                    <FormLabels>
                        Name:<br />
                        <FormInputs type="text" name="name" /> 
                    </FormLabels><br/>
                    
                    <FormLabels>
                        City:<br/>
                        <FormInputs type="text" name="name" />
                    </FormLabels><br/>

                    <FormLabels>
                        Prayer:<br/>
                        <Textarea /><br/>
                    </FormLabels><br/>
                    
                    <Input type="submit" value="Submit" onClick={() => handleSubmit()} />
                </GodForm>

            {/* </div> */}
            {/* <div>
                <GetADuck />
            </div> */}

            </div>
            


        </Message>
    );
}

export default Massage;