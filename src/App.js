import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    name: [],
    phoneNumer: []

  }

  addName = (event) => {
    let newName = event.target.value
    this.setState({
      name: newName
    })
  }
  
  addPhoneNumber = (event) => {
    let newNumber = event.target.value
    this.setState({
      phoneNumber: newNumber
    })
  }

  render () { 
  return (
    <div className="App">
      <div>
        <input class="nameInput"></input>
        <input class="phoneInput"></input>
      </div>
      <div>
        <ul>
          <li class="savedName"></li>
          <li class="savedPhone"></li>
        </ul>
      </div>
    </div>
  )}
} 

export default App;
