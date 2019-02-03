import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

const state = {
  robots: robots,
  searchField: ''
}

class App extends Component {
  render() {
    return (
      <div className="tc">
        <h1>Robot App</h1>
        <SearchBox />
        <CardList robots={robots}/>
      </div>
    )
  }
}

export default App;
