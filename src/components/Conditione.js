import React from "react";

class Conditione extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && <p>place: {this.props.city}, {this.props.country}</p>}
        {this.props.sunset && <p>Sunset: {this.props.sunset}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
};

export default Conditione;
