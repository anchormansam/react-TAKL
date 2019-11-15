import React from "react";
import "./Logout.css";
import axios from "axios";

export default class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    axios({
      url: "/logout",
      method: "get",
      baseURL: "http://127.0.0.1:8000/api",

      headers: { Authorization: "Bearer" + this.props.token }
    });

    localStorage.setItem("token", JSON.stringify(""));
    localStorage.setItem("user", JSON.stringify(""));
    localStorage.setItem("profile", JSON.stringify(""));
    this.props.setToken("");
    event.preventDefault();
  }

  render() {
    return <button onClick={this.handleClick}>Logout</button>;
  }
}
