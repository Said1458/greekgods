import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./Home.css";


export class Home extends Component {
    render() {
        return (
            <div className="Container">
                <h1>TalariApp</h1>
                <h2>Making a request to the gods is easier than ever!</h2>
                    <br></br>
               <p> All it takes is 3 simple steps.
                    <ul>
                        <li>Select the nature of your request.</li>
                        <li>We will match you with the perfect god or goddess for your unique needs!</li>
                        <li>Simply write a message to your god or goddess, select an optional sacrifice, 
                            and we will take care of the rest!</li>
                </ul>
                </p>
                <br></br>
            <Link to="/select"> <h1>Get Started</h1> </Link>
            </div>
        )
    }
}


export default Home;
