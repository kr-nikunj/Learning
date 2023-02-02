import React, { Component, useState } from 'react'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'gcdd'};

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit() {
    // alert('A name was submitted: ' + this.state.value);
    this.togglechange(this.state.value);
    // event.preventDefault();
  }

  render() {
    return (
      // <form onSubmit={this.handleSubmit}>
      <div>

        <label>
          Name:
          <input type="text" value={this.state.value} onChange={(e)=> this.handleChange(e)} />
        </label>
          {this.state.value}
        <button onClick={()=> this.props.changename(this.state.value)}>Submit</button>
      </div>
        /* <input type="submit" value="Submit" /> */
      // </form>
    );
  }
}

export default Child