import React, { Component } from 'react';

class Details extends Component {
  cardMaker = () => {
    console.log("detail", this.props)
    // debugger
    return (
      <div className="details">
        <h1>Detail Card</h1>
        <h1>Description: {this.props.singleWeather.weather[0].description}</h1>
        <h1>Wind Speed{this.props.singleWeather.wind.speed}</h1>
      </div>
    )
  }

  render() {
    return (
      this.cardMaker()
    );
  }
}

export default Details;
