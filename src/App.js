import React from 'react';
import axios from 'axios';

import { Route, BrowserRouter as Router, Link } from "react-router-dom";

//Components
import Message from './Components/Message/Message';
import Selector from './Components/Selector';
import { GodsArray } from './Components/InternalData.js';
import GodsList from './Components/GodsList';
import Home from './Components/Home'
//CSS
import './App.css';
import GetADuck from './Components/RandomDuck';
import GodCard from './Components/GodCard';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: GodsArray,
      filtered: GodsArray,
      duck: "",
      name: [],
      search: "",
      choosenGod: []
    }
  }

  componentDidMount() {

    // const headers = {
    //   'Content-Type': 'text/plain'
    // };
    const url = "https://cors-anywhere.herokuapp.com/https://random-d.uk/api/random"

    axios
      .get(url)
      .then((response) => {
        this.setState({ duck: response.data });
        // console.log(this.state.duck.url)
      })
      .catch((err) => {
        console.log("error??", err);
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
  godFilter() {
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


    // componentDidUpdate(prevSate, prevProps) {
    //   if (prevState.choosenGod !== this.state.choosenGod) {
        
    //   }
    // }

    // chooseGod (name) {
    //   this.setState({ choosenGod: this.state.filtered.filter((god) => god.name === name) })
    //   // console.log("god", this.state.filtered.filter((god) => god.name === name))
    //   return this.state.filtered.filter((god) => god.name === name)
    // }



  render() {
    //console.log(this.state.data)

    return (
      <Router>

      <div className="App">
        <Home />
        {/* <GodsList godattributes={this.state.data} /> */}
        
      

        <Route exact path="/contact/:name" render= {(props)=> <Message {...props} allGods={this.state.data} onGod={(godName) => {this.chooseGod(godName)}} />}></Route>
        <Route exact path="/select" render= {()=> <Selector godattributes={this.state.filtered} onSearch={(key) => {this.handleSearch(key)}} />}></Route>
        
        <Route exact path="/ducksess" render={() => <GetADuck randomimg={this.state.duck.url} />}></Route>
      </div>


      </Router>
    )
  }
}

export default App;
