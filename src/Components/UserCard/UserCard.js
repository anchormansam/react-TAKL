import React from "react";
import "./UserCard.css";
import axios from "axios";

export default class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      image: "",
      greeting: "Welcome to TAKL"
    };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo() {
    axios.get('http://127.0.0.1:8000/api/user',{headers:{Authorization:"Bearer "+this.props.token}})
    .then(res => {
      console.log(res)
      this.setState({
        'name': res.data.name,
        'email': res.data.email,
        'image': res.data.image,
      });
      console.log(this.state)
    });
  }

  componentDidMount() {
    this.getUserInfo()
  }

  render() {
    // const cardView = this.state.
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{ this.state.name }</h5>
            <p className="card-text">{ this.state.email }</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
