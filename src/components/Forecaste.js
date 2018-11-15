import React from "react";

class Forecaste extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && <p>place: {this.props.city}, {this.props.country}</p>}
        {this.props.sky && <p>sky: {this.props.sky}</p>}
        {this.props.atmospher && <p>humidity: {this.props.atmospher}</p>}
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
};

export default Forecaste;
