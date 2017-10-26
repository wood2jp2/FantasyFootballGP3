import axios from 'axios';
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
      <div className='InjuryFeed'>
        <h1>Current Injuries for Week 9</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>News</th>
            <th>Injury</th>
          </tr>
            { this.state.injuries &&
              this.state.injuries.map(injury => {

                return (
                  <tr>
                    <td>{ injury.name }</td>
                    <td>{ injury.position }</td>
                    <td>{ injury.status }</td>
                    <td>{ injury.news }</td>
                    <td>{ injury.injury }</td>
                  </tr>
              )
              })
            }

        </table>



      </div>
    )
  }
}

export default InjuryComponent
