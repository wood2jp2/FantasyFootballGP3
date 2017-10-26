import axios from 'axios';
import Container from "../Container/Container";
import InjuriesList from "../TeamList/InjuriesList";
import React, {Component} from 'react';

class InjuryComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      injuries: []
    }
  }

  componentDidMount()  {
    axios.get('/scrape')
      .then(res => {
        console.log('yo yo yo ');
        this.setState({
          injuries: res.data
        });
      });
  }

  render () {

    console.log(this.state.injuries)
    return (
      <Container className="players-table" >
        <div className='InjuryFeed'>
          <h3>CURRENT INJURIES FOR WEEK 9</h3>
          <InjuriesList
            injuredPlayers={this.state.injuries}
          />
        </div>
      </Container>
    )
  }
}

export default InjuryComponent
