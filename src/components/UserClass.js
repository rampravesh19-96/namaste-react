import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url:
          "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png",
      },
    };

    console.log("Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log("Componrnt Did Mount");
  }

  componentDidUpdate() {
    console.log("Componrnt Did Update");
  }

  componentWillUnmount() {
    console.log("Component will mount");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("render");
    return (
      <div className="user-card">
        <div className="dummy-img">
          <img src={avatar_url} alt="" />
        </div>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}

/****
 *
 *  --- MOUNTING ---
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is Updated
 *
 * --- UPDATE
 *
 *     render (Api data)
 *     <HTML (new Api data)>
 * componentDid update
 *
 *
 *
 */
