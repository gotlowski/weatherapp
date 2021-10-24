import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const APIKey = '7b048829f003afcb9656a8aa02631016'

class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    wind: '',
    error: false
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmitCity = e => {
    e.preventDefault()

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`
    
    fetch(API)
    .then(res => {
      if(res.ok){
        return res
      }  
      throw Error("Nie udało się")
    })
    .then(res => res.json())
    .then(data=> {
      this.setState({
        error: false
      })

    })
    .catch(err => {
      console.log(err)
      this.setState({error: true})
    })
  }

  render() {
    return (
      <div className="App">
        Aplikacja pogodowa
        <Form
          text={this.state.value}
          change={this.handleInputChange}
          submit={this.handleSubmitCity} />
        <Result />
      </div>
    );
  }
}





export default App;
