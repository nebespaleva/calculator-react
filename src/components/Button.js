import React, { Component } from 'react';
import './Button.css';

export default class App extends Component {
  render() {
    return (
      <div className='button'>
        {this.props.children}
      </div>
    );
  }
}