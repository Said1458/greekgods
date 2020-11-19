import React from 'react';
import { GodsArray } from './Components/InternalData.js';
import GodsList from './Components/GodsList';





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
    </div>
  )
}
}

export default App;
