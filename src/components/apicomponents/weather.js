import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export class Weather extends Component {


  render() {
    return (
      <div className="container-fluid">
      { this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
      { this.props.humidity && <p>Humidity: {this.props.humidity}</p> } 
      { this.props.windspeed && <p>Windspeed: {this.props.windspeed} km/h </p> }
      { this.props.description && <p class='capital'>Description: {this.props.description} </p> } 
     
      </div>
    );
    	
  }
}

export default Weather;
