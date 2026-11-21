import React from "react";
import "./Welcome.css";

class WelcomeMsg extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div className="welcome-card">
        <h1>Welcome {this.props.username}</h1>

        <h2>Email: {this.props.email}</h2>
        <h2>Place: {this.props.place}</h2>
        <h2>Mobile No: {this.props.mobileNo}</h2>
      </div>
    );
  }
}

export default WelcomeMsg;
