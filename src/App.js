
import React from 'react';
import Selector from './Components/Selector';
import { GodsArray } from './Components/InternalData.js';
import Message from './Components/Message/Message';
import GodsList from './Components/GodsList';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: GodsArray

    }
  }
  

render(){
  console.log(this.state.data)

  return(
    <div>
        <GodsList godattributes={this.state.data} />
        <Message />
        <Selector />
    </div>
  )
}

export default App;
