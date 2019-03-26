import React, { Component } from 'react';
import Card from './Card.js'

class WeatherCard extends Component {
  render() {
    let card = <h1>card</h1>
    
    if (this.props.currentDay){
      console.log("WC CARD", this.props.currentDay.weather[0].description)
      card = <Card singleWeather={this.props.currentDay} check={true} remover={this.props.remover}/>
    }

    return (
      <div className="weather">
        <h1>WeatherCard</h1>
        {card}
      </div>
    );
  }
}

export default WeatherCard;
