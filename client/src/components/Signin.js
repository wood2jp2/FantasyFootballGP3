import React, { Component } from "react";
import {Button} from "react-materialize";
import "materialize-css";
import "react-materialize";

class SigninComponent extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: false,
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }

  render() {
    return (
    <div className='signin Roboto-Black'>
      <h1 className="flow-text white-text">Username:</h1>
      <input
        name='username'
        value={this.state.username}
        onChange={this.handleChange}
        />
      <h1 className="flow-text white-text">Password:</h1>
      <input
        name='password'
        type='password'
        value={this.state.password}
        onChange={this.handleChange}
      />


      <Button onClick={() => {
        this.attemptLogin
      }}> Sign in! </Button>
    </div>

  )
 }
}
export default SigninComponent
