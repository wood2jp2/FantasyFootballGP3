import axios from 'axios';
import React, {Component} from 'react';

class TwitterFeedComponent extends React.Component {

  constructor() {
    super();
    this.state = {
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
}

render () {
    return (
      <div className='TwitterFeed'>
        <h1>Matthew Berry Twitter Feed</h1>
        <ol>
            {
                this.state.tweets.map(tweet => {
                  return <li>{ tweet.text }</li>;
                })
            }
        </ol>
      </div>
    )

  }
}

export default TwitterFeedComponent
