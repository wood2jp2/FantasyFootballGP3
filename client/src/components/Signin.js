import React, { Component } from "react";
import axios from 'axios';

class SigninComponent extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    }

  attemptSignin = () => {
    const {email, password} = this.state;
    axios.post('/signin', {
      email,
      password
    }).then(response => {
      this.props.onSuccess(response.email);
      this.props.history.push('/welcome');
    }).catch(response => {
      this.props.history.push('/FailedLog');
    })
  }

  render() {
    return (
    <div className='signin'>
    <h1>Email</h1>
    <input
      name='email'
      value={this.state.email}
      onChange={this.handleChange}
      />
    <h1>Password</h1>
    <input
      name='password'
      type='password'
      value={this.state.password}
      onChange={this.handleChange}
    />
    <button onClick={() => {
      this.attemptSignin()
    }}> Sign in! </button>
    </div>
  )
 }
}
export default SigninComponent
