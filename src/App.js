import React, { Component } from "react";
import Login from "./app/modules/auth/login/Login";
import MainLayout from "./app/layouts/main-layout/MainLayout";
import "./App.css";  

class App extends Component {
  state = { isLoggedIn: false };

  handleLogin = () => this.setState({ isLoggedIn: true });
  handleLogout = () => this.setState({ isLoggedIn: false });

  render() {
    return this.state.isLoggedIn ? (
      <MainLayout onLogout={this.handleLogout} />
    ) : (
      <Login onLogin={this.handleLogin} />
    );
  }
}

export default App;
