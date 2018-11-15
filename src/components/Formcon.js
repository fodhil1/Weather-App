import React from "react";

class Formcon extends React.Component {
  state = {
    city: '',
    country: ''
  }

  onCityChange = (e) => {
    this.setState({city: e.target.value})
  }

  onCountryChange = (e) => {
    this.setState({country: e.target.value})
  }

  getWeather = (e) => {
    e.preventDefault()
    this.props.getweather(this.state.city, this.state.country)
  }
  render() {
    return(
      <form onSubmit={this.getWeather} >
        <input type="text" name="city" placeholder="City..." onChange={this.onCityChange} />
        <input type="text" name="country" placeholder="Country..." onChange={this.onCountryChange}/>
        <button>Get Weather</button>
      </form>
    );
  }
};

export default Formcon;
