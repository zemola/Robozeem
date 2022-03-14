import './App.css';
import { robots } from './robots';
import CardList from './cardList'
import Searchbox from './searchbox.js'
import { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filterRobot = this.state.robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());})
    return (
      <div className="tc">
        <h1>ROBOZEEM</h1>
        < Searchbox searchChange = {this.onSearchChange} />
        <CardList robots = {filterRobot}/>
      </div>
    );
  }
  }


export default App;
