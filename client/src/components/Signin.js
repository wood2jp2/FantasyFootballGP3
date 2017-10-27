import React, { Component } from "react";
import axios from 'axios';
import {Button, Forms} from "react-materialize";
import {Waves} from "materialize-css";


class SigninComponent extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      signinFail: false
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    }

  attemptSignin = () => {
    const {email, password} = this.state;
    // console.log(this.state); // working properly
    axios.post('/signin', {
      email,
      password
    }).then(response => {
      this.setState({
        signinFail: false
      });
      console.log(response.data.email);
      this.props.onSuccess(response.data.email);
      this.props.history.push('/teammanager');
    }).catch(response => {
      this.setState({
        signinFail: true
      });
    })
  }

  render() {
    return (
    <div className='signin flow-text white-text'>
    <h1>Email:</h1>
      <input
      name='email'
      value={this.state.email}
        onChange={this.handleChange}
        />
      <div className="flow-text white-text"></div>
      <h1>Password:</h1>
        <input
        name='password'
        type='password'
        value={this.state.password}
        onChange={this.handleChange}
      />


    <button onClick={() => {
      this.attemptSignin()
    }}> Sign in! </button>
    {
      this.state.signinFail &&
      <h2 className='flow-text white-text'>You've entered an incorrect username and or password!
      <br></br><br></br>
      Try again or click on Sign Up above to create an account.</h2>
    }

  </div>
  )
 }
}


export default SigninComponent
