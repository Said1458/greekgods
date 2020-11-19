
import React from 'react';
<<<<<<< HEAD
import Selector from './Selector';
import './App.css';

function App() {
  return (
    <div className="App">
      <Selector />
=======
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
<<<<<<< HEAD
>>>>>>> ee90c809ab4d0c1c51fe722bce4ea91258d5844b
=======

    <Message />
>>>>>>> 70320e5972a77a8ca7344e792742bee5a8f5a4f0
    </div>
  )
}
}

export default App;
