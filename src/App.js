import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Logout from "./Components/Logout/Logout";
import UserCard from "./Components/UserCard/UserCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    this.setTokenState = this.setTokenState.bind(this);
  }

  setTokenState(token) {
    this.setState({ token: token });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.token === "" ? (
          <Login something={this.setTokenState} />
        ) : (
          <React.Fragment>
            <UserCard token={this.state.token} />
            <Logout token={this.state.token} setToken={this.setTokenState} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default App;
