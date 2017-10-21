import React, { Component } from "react";
import axios from 'axios';

class SignoutComponent extends React.Component {
  constructor(props) {
    super();
    console.log(props);
    this.state = {
      email: props.email,
      signoutSuccess: false
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  attemptSignout = () => {
    const {email} = this.state.email;
    console.log(this.state.email);
    axios.get('/signout', {
      email: 'wood2jp2@gmail.com'
    }).then(response => {
      console.log('signing out');
        this.setState({
          signoutSuccess: true,
          email: ''
        });
        this.props.history.push('/signin');
      })
  }

  render() {
    return (
      <div className='signout'>
        <h1>Signout</h1>
        <button onClick={() => {
          this.attemptSignout()
        }}> Sign out! </button>
      </div>
    )
  }

}

export default SignoutComponent
