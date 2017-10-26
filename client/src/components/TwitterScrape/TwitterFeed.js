import axios from 'axios';
import React, {Component} from 'react';

class TwitterFeedComponent extends React.Component {

  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      tweets: []
    }
  }

componentDidMount() {
    axios.get('/twitterScrape')
      .then(res => {
        this.setState({
          tweets: res.data
        });
      });
=======
      tweets: [],
      analyst: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick = e => {
  e.preventDefault();
  this.setState({
    analyst: e.target.value
  });
  console.log(e.target.value);
  console.log(this.state);
  const analyst = e.target.value;
  axios.post('/twitterScrape', {
  analyst})
    .then(res => {
      this.setState({
        tweets: res.data
      });
    });

>>>>>>> c69ec80f2c09e93162b5c9014d2a44d956c6afd6
}

render () {
    return (
      <div className='TwitterFeed'>
<<<<<<< HEAD
        <h1>Matthew Berry Twitter Feed</h1>
        <ol>
            {
                this.state.tweets.map(tweet => {
                  return <li>{ tweet.text }</li>;
=======
        <h1>Your Favorite Fantasy Feeds</h1>
        <h6>Field Yates</h6>
        <button
          name='yatesButton'
          value='FieldYates'
          onClick={(e) => this.handleClick(e)}
          >Get Tweets</button>
          <h6>Stephania Bell</h6>
          <button
            name='bellButton'
            value='Stephania_ESPN'
            onClick={(e) => this.handleClick(e)}
            >Get Tweets</button>
            <h6>Adam Schefter</h6>
            <button
              name='schefterButton'
              value='AdamSchefter'
              onClick={(e) => this.handleClick(e)}
              >Get Tweets</button>
        <ol>
            {
                this.state.tweets.map((tweet, index) => {
                  return <li key={index}>{ tweet.text }</li>;
>>>>>>> c69ec80f2c09e93162b5c9014d2a44d956c6afd6
                })
            }
        </ol>
      </div>
    )
<<<<<<< HEAD

=======
>>>>>>> c69ec80f2c09e93162b5c9014d2a44d956c6afd6
  }
}

export default TwitterFeedComponent
