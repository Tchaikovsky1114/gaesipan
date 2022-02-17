import './App.css';
import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './components/Counter';
class App extends Component {
  render() {
    const name = 'react';
    return (
      <>
        <div className="react">{name}</div>
        <MyComponent>칠드런</MyComponent>
        <Counter></Counter>
      </>
    );
  }
}

export default App;
