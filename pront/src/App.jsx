import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import Inputs from "./Inputs";

class App extends Component {
  state = { LoginState: true, article: "" };
  Manager = new Login();
  render() {
    return (
      <div className="App">
        <Inputs
          LoginState={this.state.LoginState}
          article={this.state.article}
          submit={this.Manager.Submit}
        />

        <button
          onClick={async () => {
            const LoginResponse = await this.Manager.CheckState();
            console.log(LoginResponse);
            if (LoginResponse === true) {
              alert("아이디 비밀번호가 일치하지않습니다.");
            } else {
              this.setState({ LoginState: false });
              this.setState({ article: LoginResponse });
            }
          }}
        >
          State
        </button>
      </div>
    );
  }
}

export default App;
