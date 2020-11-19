import React from 'react';
import Message from './Components/Message/Message'
import Selector from './Components/Selector';
import { GodsArray } from './Components/InternalData.js';
import GodsList from './Components/GodsList';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: GodsArray,
      search: ""
    }
  }

  handleSearch(key) {
    this.setState({ search: key })
  }

  render() {
    console.log(this.state.data)

    return (
      <div className="App">
        <GodsList godattributes={this.state.data} />
        <Message />
        <Selector onSearch={(key) => { this.handleSearch(key) }} />
      </div>
    )
  }
}

export default App;
