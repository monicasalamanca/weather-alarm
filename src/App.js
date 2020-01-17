import React from 'react';
import './App.css';
import Weather from './components/Weather';

class App extends React.Component {

  state = {
    weather: []
  }

  componentDidMount() {
    fetch('http://api.weatherstack.com/forecast?access_key=4d2c9ebf6629bfc0b7641b89946c06b5&query=Bogota')
    .then(res => res.json())
    .then((data) => {
      this.setState({ weather: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <Weather weather={this.state.weather} />
    )
  }
}

export default App;
