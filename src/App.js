
import React from 'react';
import Selector from './Components/Selector';
import { GodsArray } from './Components/InternalData.js';
import Message from './Components/Message/Message';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: null

    }}
 
  render(){

  return(
    <div>
      this is app
    <Message />
    <Selector />
    </div>
  )
}
  }

export default App;
