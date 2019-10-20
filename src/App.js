import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

const jsonApiUri = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch(jsonApiUri)
      .then(response => response.json())
      .then(users => this.setState({'robots': users});
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filterRobots = this.state.robots.filter(
      robot => {
        return robot.name.toLowerCase().includes(
          this.state.searchField.toLowerCase()
        )
      }
    );

    if (this.state.robots.length == 0) {
      return <h3 className="f1">Loading...<h3>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot App</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filterRobots} />
        </div>
      )
    }
  }
}

export default App;
