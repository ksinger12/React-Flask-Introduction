import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: ""
    }
    this.getDate = this.getDate.bind(this);
  }

  getDate() {
    fetch('/date')
      .then(res => res.json())
      .then(data => {
        this.setState({date: data.date});
     })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a onClick={this.getDate}>The date today is: {this.state.date}</a>
        </header>
      </div>
    );
  }
}

export default App;
