import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

//Components
import { Header } from './components/headercomponents/header';
import { Form } from './components/page/homepage';
import { Weather } from './components/apicomponents/weather';

const API_KEY = 'a08db785ebf8d4c8ddae54666e859d02';

function capitalizeFirstLetter(s) {

    return s[0].toUpperCase() + s.slice(1);
 }

class App extends React.Component {
  state = {
    temperature: undefined,
    humidity: undefined,
    // rain: undefined,
    windspeed: undefined,
    description: undefined

    }


  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    this.setState ({
      temperature: Math.ceil(data.main.temp),
      humidity: data.main.humidity,
      windspeed: data.wind.speed,
      description: data.weather[0].description
    });

    /* if(this.setState.rain == null && this.setState.snow == null) {

    this.setState ({
      temperature: Math.ceil(data.main.temp),
      humidity: data.main.humidity,
      windspeed: data.wind.speed,
      description: data.weather[0].description
    });

    } else {
      this.setState ({
      temperature: Math.ceil(data.main.temp),
      humidity: data.main.humidity,
      rain: data.rain.rain['3h'],
      windspeed: data.wind.speed,
      description: data.weather[0].description
    });
    }
    */
  }
  render() {
    return (
      <Router>
      <div className="App">
        
      <Header />
      <Form getWeather={this.getWeather} />
      <div className='weatherData'>
      <Weather
      temperature={this.state.temperature}
      humidity={this.state.humidity}
      rain={this.state.rain}
      description={this.state.description}
      windspeed={this.state.windspeed} />
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
