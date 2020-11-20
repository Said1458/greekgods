import React, { Component } from 'react'
import "./Home.css";


export class Home extends Component {
    render() {
        return (
            <div className="Container">
                <h1 className="name">Talari App</h1>
                <p>Making a request to the gods is easier than ever! 
                    <br/>
                All it takes is 3 simple steps.
                    <ul>
                        <li>select the nature of your request.</li>
                        <li>we will match you with the perfect god or goddess for your unique needs!</li>
                        <li>simply write a message to your god or goddess, select an optional sacrifice, 
                            and     we will take care of the rest!</li>
                </ul>
                </p>
                <Button/>
            </div>
        )
    }
}


 class Button extends Component {
     state ={
         loading: false
     }

     handleFetch = () => {
         this.state({loading: true})
     }
    render() {
        const {loading} =  this.state;
        return (
            <div style={{marginTop: '60px'}}>
                <button className="button" onClick={this.handleFetch} disabled={loading}>
                    {loading && <i className="large-button"></i>}
                    See more


                </button>
                
            </div>
        )
    }
}


export default Home;
