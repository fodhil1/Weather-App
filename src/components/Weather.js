import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && <p>place: {this.props.city}, {this.props.country}</p>}
        {this.props.wind && <p>wind: {this.props.wind}</p>}
        {this.props.atmospher && <p>humidity: {this.props.atmospher}</p>}
        {this.props.condition && <p>temperature: {this.props.condition}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
};

export default Weather;
