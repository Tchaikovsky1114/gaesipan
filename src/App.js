import './App.css';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import MyComponent from './components/MyComponent';
import Counter from './components/Counter';
import Say from './components/Say';
import EventPractice from './components/EventPractice';
import EventPracticeFunction from './components/EventPracticeFunction';
class App extends Component {
  render() {
    const name = 'react';
    return (
      <>
        <div className="react">{name}</div>
        <MyComponent>칠드런</MyComponent>
        <Counter />
        <Say />
        <EventPractice />
        <EventPracticeFunction />
      </>
    );
  }
}

export default App;
