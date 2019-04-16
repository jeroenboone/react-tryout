import React, { Component } from 'react';
import './App.css';
import Searchfield from './Searcfield';

const PromotionGroup = ({ value, index }) => {
  return (
    <div key={'mykey' + index}>
      <div  >{value.name}</div>
    </div>
  )

}

function hasString(anObject, stringToFind){
  return JSON.stringify(anObject).indexOf(stringToFind) > -1
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { promotions: [], searchvalue: { value: '' } }
    this.initalPromos = [
      { name: "AntwerpenStraffeStotenBIDTV", price: -20 },
      { name: "king5euro", price: -5 },
      { name: "kongtien", price: -10 }
    ];

    this.zoekFunction = this.zoekFunction.bind(this);
  }

  componentDidMount() {
    this.setState({
      promotions: this.initalPromos
    });
  }

  zoekFunction(text) {
    var updatedList = this.initalPromos.filter(function(promo){
      return hasString(promo, text);
    });

    this.setState({
      promotions: updatedList,
      searchvalue: { value: text }
    });

  }

  

  render() {
    const elements = this.state.promotions;
    return (
      <div className="App">
        mijn app
        <Searchfield zoek={this.state.searchvalue.value} zoekFunctie={this.zoekFunction} />
        <p>-</p>

        {elements.map((value, index) => {
          return <PromotionGroup key={index} index={index} value={value} />
        })}

      </div>
    );
  }
}

export default App;
