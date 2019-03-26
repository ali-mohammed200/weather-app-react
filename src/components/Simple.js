import React, { Component } from 'react';

class Simple extends Component {
  cardMaker = () => {
    console.log("simple", this.props)
    // debugger
    return (
      <div className="simple">
        <h1>Simple Card</h1>
        <h1>{this.props.singleWeather["dt_txt"]}</h1>
        <h1>{this.props.singleWeather.main.temp}</h1>
      </div>
    )
  }

  render() {
    return (
      this.cardMaker()
    );
  }
}

export default Simple;
