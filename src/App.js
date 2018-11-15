
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Condition from "./components/Condition";
import About from "./components/About";
import Atmosphere from "./components/Atmosphere";



const App = () => (
  <BrowserRouter>
    <div className="container">

      <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route exact path="/condition" component={Condition} />
          <Route exact path="/atmosphere" component={Atmosphere} />

        </Switch>

</div>
  </BrowserRouter>
);

export default App;



















/*    ****************************
 import React from "react";
 import Title from "./components/Title";
 import Form from "./components/Form";
 import Weather from "./components/Weather";
 import { BrowserRouter, Route} from "react-router-dom";
 import { Button } from "react-bootstrap";

 class App extends React.Component {

   state = {
  wind: undefined,
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
        wind: data.query.results.channel.wind.speed,
        atmospher: data.query.results.channel.atmosphere.humidity,
        city: data.query.results.channel.location.city,
        country: data.query.results.channel.location.country,
        error: ""
      });
  } else {
    this.setState({
    wind: undefined,
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
       <BrowserRouter>
         <div>
         <Title />
        <Route path="/" component={Title} />
          <Form getweather = {this.getWeather} />
          <Weather
            wind={this.state.wind}
            atmospher={this.state.atmospher}
            city={this.state.city}
            country={this.state.country}
            error={this.state.error}
          />
         </div>
       </BrowserRouter>
     );
   }
 };

 export default App;
     ********************** */
