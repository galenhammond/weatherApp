import React, { Component } from 'react';

export class Form extends Component {
  render() {
    return (
      <form onSubmit = {this.props.getWeather}>
        <input className='form-control' type='text' name="city" placeholder='Enter a city' />
        <input className='form-control' type='text' name="country" placeholder='Enter country (e.g CAN, US, UK, etc)' />
        <div className='buttonHolder'>
        <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
