import React, {Component} from 'react';
import Select from 'react-select';


const options = [
    { value: 'war', label: 'war' },
    { value: 'crafts', label: 'crafts' },
    { value: 'wisdom', label: 'wisdom' },
    { value: 'agriculture, farming', label: 'farming' },
    { value: 'food, grain, bread', label: 'food' },
    { value: 'parties, festivity', label: 'parties' },
    { value: 'wine', label: 'alcohol' },
    { value: 'madness', label: 'madness' },
    { value: 'fire', label: 'fire' },
    { value: 'metalworking', label: 'metalworking' },
    { value: 'marriage', label: 'marriage' },
    { value: 'trade', label: 'trade' },
    { value: 'thievery', label: 'thievery' },
    { value: 'athletics', label: 'athletics' },
    { value: 'messengers', label: 'messages' },
    { value: 'sea', label: 'sea' },
    { value: 'earthquakes', label: 'earthquakes' },
    { value: 'storms, skies, thunder, lightning', label: 'storms' },
    { value: 'horses', label: 'horses' },
    { value: 'hospitality', label: 'hospitality' },
    { value: 'honor', label: 'honor' },
    { value: 'fortune, riches', label: 'money' },
    { value: 'dead, underworld', label: 'death' },
    { value: 'chance', label: 'chance' },
    { value: 'witchcraft', label: 'witchcraft' },
    { value: 'magic', label: 'magic' },
    { value: 'ghosts', label: 'ghosts' },
    { value: 'love', label: 'love' },
    { value: 'beauty', label: 'beauty' },
    { value: 'procreation', label: 'procreation' },
    { value: 'music', label: 'music' },
    { value: 'healing', label: 'healing' },
    { value: 'courage', label: 'courage' },
    { value: 'hunting', label: 'hunting' },
    { value: 'animals', label: 'animals' },
    { value: 'children', label: 'children' }
  ]

  function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

let optionsSorted = options.sort(dynamicSort("label"))

console.log(optionsSorted)

class Selector extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ""}
      };
    

    render() {
      return (
          <div>
          <div>
        What do you need help with?
          </div>
        <form>
        <Select options={optionsSorted}   onChange={(event)=>{
               console.log("event", event.value); 
               this.setState({value:event})
              }} />
        </form>
        </div>
      );
    }
  }
  
  export default Selector;