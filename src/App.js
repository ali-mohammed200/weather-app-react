import React, { Component } from 'react';
import Form from './components/Form'
import FiveDayList from './components/FiveDayList'
import './App.css';

class App extends Component {
  state = {
    location: "",
    myWeather: ""
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

  render() {
    return (
      <div className="App">
        <h1>APP.JS Weather</h1>
        <Form />
        <FiveDayList location={this.state.location} myWeather={this.state.myWeather}/>
      </div>
    );
  }
}

export default App;


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
