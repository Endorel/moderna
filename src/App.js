import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './actions/userActions';
import { fetchTweets } from './actions/tweetsActions';
import './App.css';


class App extends Component {

  fetchUser = (event) => {
    this.props.fetchUser();
  }

  fetchTweets = (event) => {
    this.props.fetchTweets();
  }

  render() {
    const props = this.props;
    console.log("Props: ", props);
    const name = props.user.user.name;
    const numberOfTweets = props.tweets.tweets.length;
    return (
      <div className="App">
        <button onClick={this.fetchUser}>Get user</button>
        {name && <h1>{name}</h1>}
        <button onClick={this.fetchTweets}>Get number of tweets</button>
        {numberOfTweets && <h1>{numberOfTweets}</h1>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
  fetchTweets: () => dispatch(fetchTweets())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
