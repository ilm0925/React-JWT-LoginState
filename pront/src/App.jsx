import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Form from "./Form";

class App extends Component {
  state = { LoginState: true, article: "" };
  Manager = new Login();

  componentDidMount() {
    this.IsLogin();
  }

  async IsLogin() {
    const LoginResponse = await this.Manager.CheckState();
    console.log(LoginResponse);
    if (LoginResponse === true) {
      alert("로그인을 해주세요");
      this.setState({ LoginState: true });
    } else {
      this.setState({ LoginState: false });
      this.setState({ article: LoginResponse });
    }
  }

  render() {
    return (
      <div className="App">
        <Form
          LoginState={this.state.LoginState}
          article={this.state.article}
          submit={this.Manager.Submit}
        />
      </div>
    );
  }
}

export default App;
