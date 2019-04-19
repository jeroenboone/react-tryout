import React, { Component } from 'react';
import './App.css';
import Searchfield from './Searcfield';
import { connect } from "react-redux";
import {zoekFunctionActions} from './js/actions/actions'

const PromotionGroup = ({ value, index }) => {
  return (
    <div key={'mykey' + index}>
      <div  >{value.name}</div>
    </div>
  )

}



class App1 extends Component {
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
    // var updatedList = this.initalPromos.filter(function(promo){
    //   return hasString(promo, text);
    // });
    this.props.zoekFunctionProps(text);

    this.setState({
      // promotions: updatedList,
      searchvalue: { value: text }
    });

  }

  render() {
    // const elements = this.state.promotions;
    const elements = this.props.promotionsAsProps;
    return (
      <div className="App">
        mijn app
        <Searchfield zoek={this.state.searchvalue.value} zoekFunctie={this.zoekFunction} />
        <p>-</p>

        { 
          elements.map((value, index) => {
            return <PromotionGroup key={index} index={index} value={value} />
          })
        }

        <p>-</p>

        {/* reduxVar {reduxVar} */}

      </div>
    );
  }
}

function mapStateToProps(state){
  // console.log("mapStateToProps" + state);
  return {
      promotionsAsProps: state.promotions,
  }
}

function mapDispatchToProps(dispatch) {
  // console.log("mapDispatchToProps" + dispatch);
  return {
    zoekFunctionProps: text => dispatch(zoekFunctionActions(text))
  }
};


const App = connect(mapStateToProps, mapDispatchToProps)(App1);

export default App;
