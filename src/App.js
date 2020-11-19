import React from 'react';
import Message from './Components/Message/Message'
import { GodsArray } from './Components/InternalData.js';
import axios from 'axios';





class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: null

    }
  }





  
  
 
render(){

  return(
    <div>
      <Message />
      this is app
    </div>
  )
}
}

export default App;
