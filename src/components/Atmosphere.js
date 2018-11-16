
 import React from "react";
 import Title from "./Title";
 import Formatmo from "./Formatmo";
 import Atmospher from "./Atmospher";
 /* import Atmosphere from "./Atmosphere"; */
 import { BrowserRouter, Route} from "react-router-dom";
/* import { Button } from "react-bootstrap";  */

 class Atmosphere extends React.Component {

   state = {
  atmosphere: undefined,
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
        atmosphere: data.query.results.channel.atmosphere.pressure,
        city: data.query.results.channel.location.city,
        country: data.query.results.channel.location.country,
        error: ""
      });
  } else {
    this.setState({
    atmosphere: undefined,
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
         <div className="content home">
           <div>
             <h1>Atmosphere of your location</h1>
             <p>Enter your location to get the astronomy</p>
           </div>
          <Formatmo getweather = {this.getWeather} />
          <Atmospher
            atmosphere={this.state.atmosphere}
            city={this.state.city}
            country={this.state.country}
            error={this.state.error}
          />
         </div>
     );
   }
 };

 export default Atmosphere;
