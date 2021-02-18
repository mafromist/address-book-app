import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    addName: "",
    addPhoneNumber: "",
    savedNames: [],
    savedPhoneNumbers: []
  }

  addNameHandler = (event) => {
    this.setState({
      addName: event.target.value
    })
  }
  
  phoneNumberHandler = (event) => {
    this.setState({
      addPhoneNumber: event.target.value
    })
  }

  saveContactHandler = (name, phoneNumber) => {
    this.setState ({
      savedNames: [...this.state.savedNames, this.state.addName],
      addName: "",
      savedPhoneNumbers: [...this.state.savedPhoneNumbers, this.state.addPhoneNumber],
      addPhoneNumber: ""
    })
  }

  render () { 

    let eachName = this.state.savedNames.map((name, index) =>{
      return <li key = {index} className="savedNames" > {name} </li>
    })
    
    let eachPhoneNumber = this.state.savedPhoneNumbers.map((phoneNumber, index) =>{
      return <li key = {index} className="savedPhoneNumbers" > {phoneNumber} </li>
    })

    return (
      <div className="App">
        <div className="appInfo">
          <h1>Digital Address Book</h1>
          <p>Save your important contacts into your digital address book, no need to memorise the numbers</p>
        <div className="inputArea">
          <div className="contactInputArea">
            <input className="nameInput input" type="text" onChange={this.addNameHandler} placeHolder="Enter New Name"
            value={this.state.addName}></input>
            <input className="phoneInput input" type="tel" onChange={this.phoneNumberHandler} placeHolder="Enter New Phone Number"
            value={this.state.addPhoneNumber}></input>
          </div>
          <div>
            <button className="saveBtn" onClick={this.saveContactHandler}>Save Contact</button>
          </div>
        </div>
        </div>
        <div className="savedListArea">
          <div className="savedNameArea">
            <h2 className="nameTitle">Saved Name</h2>
            <ul className="savedName">{eachName}</ul>
          </div>
          <div className="savedPhoneNumberArea">
            <h2 className="phoneTitle">Saved Numbers</h2>
            <ul className="savedNumber">{eachPhoneNumber}</ul>
          </div>
        </div>
      </div>
    )}
} 

export default App;
