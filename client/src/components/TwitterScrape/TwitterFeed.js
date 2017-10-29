import axios from 'axios';
import React, {Component} from 'react';
import "./TwitterFeed.css";

class TwitterFeedComponent extends React.Component {

  constructor() {
    super();
    this.state = {
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

}

render () {
    return (
      <div className='TwitterFeed'>
        <h2>Your Favorite Fantasy Feeds</h2>
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
                })
            }
        </ol>
      </div>
    )
  }
}

export default TwitterFeedComponent;
