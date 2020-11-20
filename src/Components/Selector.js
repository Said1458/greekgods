import React, {Component} from 'react';
import Select from 'react-select';
import {GodsArray} from './InternalData';
import GodsList from '../Components/GodsList';


const options = [
    { value: 'war', label: 'war' },
    { value: 'crafts', label: 'crafts' },
    { value: 'wisdom', label: 'wisdom' },
    { value: 'agriculture', label: 'farming' },
    { value: 'grain', label: 'food' },
    { value: 'parties, festivity', label: 'parties' },
    { value: 'wine', label: 'alcohol' },
    { value: 'madness', label: 'madness' },
    { value: 'marriage', label: 'marriage' },
    { value: 'trade', label: 'trade' },
    { value: 'thievery', label: 'thievery' },
    { value: 'athletics', label: 'athletics' },
    { value: 'messengers', label: 'messages' },
    { value: 'sea', label: 'sea' },
    { value: 'earthquakes', label: 'earthquakes' },
    { value: 'storms', label: 'storms' },
    { value: 'horses', label: 'horses' },
    { value: 'hospitality', label: 'hospitality' },
    { value: 'honor', label: 'honor' },
    { value: 'wealth', label: 'wealth' },
    { value: 'the dead', label: 'death' },
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
    { value: 'children', label: 'children' },
    { value: 'law', label: 'law' },
    { value: 'travel', label: 'travel' }


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
console.log("options", optionsSorted)



//console.log("gods", GodsArray)

const yourGod = GodsArray.reduce((acc, current) => {
  const containsWar = () =>
    Object.values(current).some((el) => `${el}`.includes("war"));
  if (containsWar()) {
    return [...acc, current];
  }
  return acc;
}, []);
console.log("your god", yourGod);



class Selector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""}
  };
  
  handleChange(event) {
    //console.log(event)
    this.setState({ value: event.value })
    // we don't really need a state here
    this.props.onSearch(event.value)
    console.log(this.state.value)
  }

    render() {
      console.log(this.props)
      return (
          <div>
          <div>
        What do you need help with?
          </div>
        <form>
        <Select options={optionsSorted} onChange={(event) => this.handleChange(event)}/>
        {/* the top one works!!!! */}
        <Select options={optionsSorted}   onChange={(event)=>{
               console.log("event", event.value); 
               this.setState({value:event})
              }} />
        </form>
        <GodsList godattributes={this.props.godattributes} />
        </div>
      );
    }
  }
  
  export default Selector;