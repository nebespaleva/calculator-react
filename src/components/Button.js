import React, { Component } from 'react';
import './Button.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  isOperator = val => {
    return !isNaN(val) || val === '.' || val==='='
  }

  render() {
    const {handleClick} = this.props;
    return (
      <div 
        className={`button ${this.isOperator(this.props.children) ? "" : "operator"}`}
        onClick={() => handleClick(this.props.children)}>
        {this.props.children}
      </div>
    );
  }
}