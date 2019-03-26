import React, { Component } from 'react';
import Form from './components/Form'
import FiveDayList from './components/FiveDayList'
import WeatherCard from './components/WeatherCard';
import './App.css';

class App extends Component {
  state = {
    location: "",
    myWeather: "",
    currentDay: undefined,
    userInput: "",
  }

  weatherGrabber = (location) => {
    fetch("http://localhost:3001/weather", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
          location: location
        })
    }).then(resp => resp.json()).then(
        resp => { this.setState({
          location: location,
          myWeather: resp
        })
      })
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
          }, ()=> console.log(this.state))
        })
    })
  }

  detailClicker = (obj) => {
    this.setState({currentDay: obj}, ()=> console.log(this.state))
  }
  remover = () => {
    this.setState({currentDay: undefined})
  }

  cardFilter = (val) => {
    this.setState({userInput: val})
  }

  filterArray = (weatherArr) => {
    if(this.state.userInput == ""){
      return weatherArr
    } else {
      return [...weatherArr].filter(elem => elem.dt_txt.includes(this.state.userInput))
    }
  }

  render() {
    return (
      <div className="App">
        <h1>APP.JS Weather</h1>
        <Form weatherGrabber={this.weatherGrabber} cardFilter={this.cardFilter} userInput={this.state.userInput}/>
        <FiveDayList myWeather={this.filterArray(this.state.myWeather)} detailClicker={this.detailClicker} location={this.state.location}/>
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
