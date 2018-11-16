/* import all of the components */
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Condition from "./components/Condition";
import About from "./components/About";
import Atmosphere from "./components/Atmosphere";


/* App is the global container of the application meaning the parent component */
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
