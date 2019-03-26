import React, { Component } from 'react';
import Form from './components/Form'
import FiveDayList from './components/FiveDayList'
import WeatherCard from './components/WeatherCard';
import './App.css';

class App extends Component {
  state = {
    location: "",
    myWeather: "",
    currentDay: undefined
  }

  componentDidMount(){
    fetch("https://geoip-db.com/json/").then(fresp => fresp.json()).then(fresp => {
      // resp["city"]
      fetch("http://localhost:3001/weather", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
      			location: fresp['city']
      		})
      }).then(resp => resp.json()).then(
          resp => { this.setState({
            location: fresp['city'],
            myWeather: resp
          })
        })
    })
  }

  detailClicker = (obj) => {
    this.setState({currentDay: obj}, ()=> console.log(this.state))
  }
  remover = () => {
    this.setState({currentDay: undefined})
  }

  render() {
    return (
      <div className="App">
        <h1>APP.JS Weather</h1>
        <Form />
        <FiveDayList myWeather={this.state.myWeather} detailClicker={this.detailClicker}/>
        <WeatherCard currentDay={this.state.currentDay} remover={this.remover}/>


      </div>
    );
  }
}

export default App;



// {this.state.currentDay ? (<WeatherCard currentDay={this.state.currentDay}/>) : null}

// Getting a user location without permission using approximate ip address
//  https://geoip-db.com/json/

// else HTML GeoLocation
// navigator.geolocation.getCurrentPosition(showPosition);
//
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
//
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }
