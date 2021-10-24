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
    pressure: '',
    error: false
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.value)
    console.log(this.state.value)
if(this.state.value.length <= 2) return

    if (prevState.value !== this.state.value) {

      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`

      fetch(API)
        .then(res => {
          if (res.ok) {
            return res
          }
          throw Error("Nie udało się")
        })
        .then(res => res.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState(prevState => ({
            error: false,
            date: time,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            wind: data.wind.speed,
            pressure: data.main.pressure
          }))
        })
        .catch(err => {
          console.log(err)
          this.setState(prevState => {
            return {
              error: true,
              city: prevState.value
            }
          }
          )
        })
    }
  }

  render() {
    return (
      <div className="App" >
        Aplikacja pogodowa
        <Form
          text={this.state.value}
          change={this.handleInputChange}
        // submit={this.handleSubmitCity}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}





export default App;
