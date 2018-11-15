import React from "react";

class Atmospher extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && <p>place: {this.props.city}, {this.props.country}</p>}
        {this.props.atmosphere && <p>Pressure: {this.props.atmosphere}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
};

export default Atmospher;
