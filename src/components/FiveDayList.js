import React, { Component } from 'react';
import WeatherCard from './WeatherCard';

class FiveDayList extends Component {
  render() {
    return (
      <div>
        <h1>5 Day List</h1>
        <WeatherCard myWeather={this.props.myWeather}/>
      </div>
    );
  }
}

export default FiveDayList;
