import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { db } from '../firebase';
import moment from 'moment';
import styled, { keyframes } from 'styled-components';
import Typewriter from '../components/Typewriter';
import Test from '../test';

const submitClick = () => {
  const rating = 79;
  const today = moment().format('dddd');
  var temp;

  db
    .ref()
    .child(today)
    .set(rating);

  db
    .ref()
    .child('Total')
    .once('value')
    .then(({ node_ }) => {
      db
        .ref()
        .child('Total')
        .set(node_.value_ + rating.toString());
    });
};

class Home extends Component {
  handleKeyDown = e => {
    if (e.key === 'Enter') {
      console.log('enter press here! ');
    }
  };

  componentDidMount = () => {
    setTimeout(() => window.addEventListener('keydown', this.handleKeyDown), 2000);
  };

  componentWillUnmount = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  render() {
    return (
      <div className="App">
        <Typewriter phrase="Log(me)." time={300} delay={500} />
        {/* <button onClick={submitClick}>Update Firebase</button>
          <Test /> */}
      </div>
    );
  }
}

export default Home;
