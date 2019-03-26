import React, { Component } from 'react';


class Form extends Component {
  state = {
    location: ""
  }

  writer = (e) => {
    this.setState({location: e.target.value}, ()=> console.log(this.state.location))
    this.tester()
  }

  tester = () => {
    console.log("yes")
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <input type="text" name="location" placeholder="Enter a location" value={this.state.location} onChange={this.writer}/>
        <button>Submit</button>
      </div>
    );
  }
}

export default Form;
// Form needs state for its rerender on each user keypress.
// This will enable us to have a controlled form
