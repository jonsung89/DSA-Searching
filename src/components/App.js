import React, { Component } from 'react';
import './App.css';
import InputBox from "./InputBox";
import dataset from "../dataset.json";


class App extends Component {
  render() {
    return <div className="App">
        <h1 className="App-header">Searching and Tree Traversal Drills</h1>
        <InputBox arr={dataset}/>
      </div>;
  }
}

export default App;
