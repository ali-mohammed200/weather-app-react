import React, { Component } from 'react';
import Card from './Card.js'

class WeatherCard extends Component {
  render() {
    return (
      <div>
        <h1>WeatherCard</h1>
          <Card myWeather={this.props.myWeather}/>
      </div>
    );
  }
}

export default WeatherCard;
