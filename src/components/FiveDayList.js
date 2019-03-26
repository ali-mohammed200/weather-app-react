import React, { Component } from 'react';
import Card from './Card';

class FiveDayList extends Component {
  render() {
    console.log("card", this.props.myWeather)
    let cards = []

    if (this.props.myWeather.length > 0){
      cards = this.props.myWeather.map(obj => {
        return <Card singleWeather={obj} detailClicker={this.props.detailClicker} check={false} location={this.props.location}/>
      })
    }
    
    return (
      <div className="five">
        <h1>5 Day List</h1>
        {cards}
      </div>
    );
  }
}

export default FiveDayList;
