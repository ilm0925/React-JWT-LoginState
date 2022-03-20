import React, { Component } from "react";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.Submit = this.props.submit.bind(this);
  }
  state = { id: "", pwd: "" };
  render() {
    if (this.props.LoginState) {
      return (
        <>
          <div>
            ID :
            <input
              onChange={(e) => {
                this.setState({ id: e.target.value });
              }}
              type="text"
            />
          </div>
          <div>
            Password :
            <input
              onChange={(e) => {
                this.setState({ pwd: e.target.value });
              }}
              type="text"
            />
          </div>
          <button
            onClick={() => {
              this.Submit(this.state.id, this.state.pwd);
            }}
          >
            Submit
          </button>
        </>
      );
    } else {
      return (
        <>
          <h1>{this.props.article}</h1>
        </>
      );
    }
  }
}

export default Inputs;
