import React from 'react';
import axios from 'axios';
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
      filtered: GodsArray,
      duck:[],
      name:[],
      search: ""
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
  }

  // this function funs the filter only when the state changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.godFilter()
    }
  }


  // this is annkia's fillter function it was just moved to app
  // maybe we should add all or something to clear everything
  godFilter () {
    const yourGod = GodsArray.reduce((acc, current) => {
      const containsWar = () =>
        Object.values(current).some((el) => `${el}`.includes(this.state.search));
      if (containsWar()) {
        return [...acc, current];
      }
      return acc;
    }, []);
    console.log("your god", yourGod);
    this.setState({ filtered: yourGod })
  }

  //this function gets thesearch from the selector component
    handleSearch(key) {
      this.setState({ search: key })
      // setTimeout(() => {
      //   console.log("timeout", this.state.search)
      // }, 1000);
      
    }

  
  

  render() {
    //console.log(this.state.data)

    return (
      <div className="App">
        {/* <GodsList godattributes={this.state.data} /> */}
        <Message />
        <Selector godattributes={this.state.filtered} onSearch={(key) => {this.handleSearch(key)}} />
      </div>
    )
  }
}

export default App;
