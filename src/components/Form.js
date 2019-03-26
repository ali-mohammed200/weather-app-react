import React, { Component } from 'react';


class Form extends Component {
  state = {
    location: ""
  }

  writer = (e) => {
    this.setState({location: e.target.value}, ()=> console.log(this.state.location))
  }

  filterFunc = (e) => {
    this.props.cardFilter(e.target.value)
  }

  submitter = (e) => {
    this.props.weatherGrabber(this.state.location)
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <input type="text" name="location" placeholder="Enter a location" value={this.state.location} onChange={this.writer}/>
        <button onClick={this.submitter}>Submit</button>

        <h1>Filter</h1>
        <input type="text" name="dateFilter" placeholder="Filter by date" value={this.props.userInput} onChange={this.filterFunc}/>
      </div>
    );
  }
}

export default Form;
// Form needs state for its rerender on each user keypress.
// This will enable us to have a controlled form
