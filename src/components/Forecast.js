
 import React from "react";
 import Title from "./Title";
 import Formcast from "./Formcast";
 import Forecaste from "./Forecaste";
 /* import Atmosphere from "./Atmosphere"; */
 import { BrowserRouter, Route} from "react-router-dom";
/* import { Button } from "react-bootstrap";  */

 class Forecast extends React.Component {

   state = {
  sky: undefined,
  atmospher: undefined,
  city: undefined,
  country: undefined,
  error: undefined
}

getWeather = async (city, country) => {
  const api_call = await fetch(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${city}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`);
  const data = await api_call.json();
  console.log(data);

    if(city && country) {
      console.log(data);
      this.setState({
        sky: data.query.results.channel.item.condition.text,
        atmospher: data.query.results.channel.atmosphere.humidity,
        city: data.query.results.channel.location.city,
        country: data.query.results.channel.location.country,
        error: ""
      });
  } else {
    this.setState({
    sky: undefined,
    atmospher: undefined,
    city: undefined,
    country: undefined,
    error: "please enter the values"
  });
  }
}

   constructor() {
     super();
     this.state = {
       data: [],
     }
   }

   render() {
     console.log(this.state)
     return(
         <div>
         <Title />
          <Formcast getweather = {this.getWeather} />
          <Forecaste
            sky={this.state.sky}
            atmospher={this.state.atmospher}
            city={this.state.city}
            country={this.state.country}
            error={this.state.error}
          />
         </div>
     );
   }
 };

 export default Forecast;
