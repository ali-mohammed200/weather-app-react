import React, { Component } from 'react';
import Simple from './Simple';
import Details from './Details';

class Card extends Component {
  render() {
    console.log("card", this.props.myWeather)
    let simpleCards = []
    if (this.props.myWeather.length > 0){
      simpleCards = this.props.myWeather.map(obj => {
        return <Simple singleWeather={obj}/>
      })
    }

    let detailCards = []
    if (this.props.myWeather.length > 0){
      detailCards = this.props.myWeather.map(obj => {
        return <Details singleWeather={obj}/>
      })
    }

    return (
      <div>
        <h1>Card</h1>
        {simpleCards}
        {detailCards}
      </div>
    );
  }
}

export default Card;
