
 import React from "react";
 import Title from "./Title";
 import Form from "./Form";
 import Weather from "./Weather";


 class Home extends React.Component {
 /* create a state */
   state = {
  wind: undefined,
  atmospher: undefined,
  condition: undefined,
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
      /* save the data */
      this.setState({
        wind: data.query.results.channel.wind.speed,
        atmospher: data.query.results.channel.atmosphere.humidity,
        condition: data.query.results.channel.item.condition.temp,
        city: data.query.results.channel.location.city,
        country: data.query.results.channel.location.country,
        error: ""
      });
  } else {
    this.setState({
    wind: undefined,
    atmospher: undefined,
    condition: undefined,
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
         <Title />
          <Form getweather = {this.getWeather} />
          <Weather
            wind={this.state.wind}
            atmospher={this.state.atmospher}
            condition={this.state.condition}
            city={this.state.city}
            country={this.state.country}
            error={this.state.error}
          />
         </div>
     );
   }
 };

 export default Home;
