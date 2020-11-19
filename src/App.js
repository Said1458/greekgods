
import React from 'react';
import { GodsArray } from './Components/InternalData.js';
import axios from 'axios';
import Message from './Components/Message/Message';
import './App.css';

      


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: null

    }
 
render(){

  return(
    <div>
      this is app

    <Message />
    </div>
  )
}
}

export default App;
