import React, { Component } from "react";

export default class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount(){
    console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7")
    const json = await data.json()
    console.log(json);
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    console.log(this.props.name + "Child Render");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
            this.setState({ count2: this.state.count2 + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @akshaymarch7</h4>
      </div>
    );
  }
}
