// import axios from 'axios';
// import React, {Component} from 'react';
//
// class TwitterFeedComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       tweets: []
//     }
//   }
//
// componentDidMount() {
//     axios.get('/twitterScrape')
//       .then(res=> {
//         console.log(res);
//       });
// }
//
//   render () {
//     return (
//       <div className='TwitterFeed'>
//         <h1>Matthew Berry Twitter Feed</h1>
//         <ol>
//
//             this.state.tweets.length ? (
//               this.state.tweets.map(tweet => {
//                 <li>tweet</li>
//               })
//             )
//
//           <li
//             className='tweet'
//             value={this.state.tweets}></li>
//         </ol>
//       </div>
//     )
//
//   }
// }
//
// export default TwitterFeedComponent
