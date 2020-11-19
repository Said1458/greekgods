import React from 'react';
import Message from './Components/Message/Message'
import Selector from './Components/Selector';
import { GodsArray } from './Components/InternalData.js';
import GodsList from './Components/GodsList';
import './App.css';
import axios from 'axios'
import GetADuck from './Components/RandomDuck';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: GodsArray,
      duck:[],
      name:[],

    }
  }

  componentDidMount() {
    
    const headers = {
      'Content-Type': 'text/plain'
  };
    const url = "http://cors-anywhere.herokuapp.com/https://random-d.uk/api/random"

    axios
    .get(url)
    .then((response) => {
      this.setState({duck:response.data});
      console.log("ducks u here?",this.state.duck)
    
 
    })
    .catch((err) => {
      console.log("error??",err);
    });

    // const names="https://randomuser.me/api/?inc=name&noinfo"
    // axios
    // .get(names)
    // .then((response) => {
    //   this.setState({name:response.data});
    //   console.log("name u here?",this.state.name)
    
 
    // })
    // .catch((err) => {
    //   console.log("error??",err);
    // });
}



render(){
  console.log(this.state.data)

  return(
    <div className="App">
        <GodsList godattributes={this.state.data} />
        <Message />
        <Selector />
        <GetADuck  randomimg={this.state.duck.url} />
        
    </div>
  )
}
}

export default App;
