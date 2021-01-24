import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Clear from './components/Clear'
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
		input: '',
		previosNumber: '',
		currentNumber: '',
		operator: ''
    }
  }

  addToInput = val => {
	  this.setState({
			  input: this.state.input + val
	  })
  }

  addZeroToInput = val => {
	  if(this.state.input !== '') {
		  this.setState({
			  input: this.state.input + val
		  })
	  }
  }

  addDecimal = val => {
	  if(this.state.input.indexOf('.') === -1) {
		  this.setState({
			  input: this.state.input + val
		  })
	  }
  }

  clearInput = () => {
	  this.setState({
		  input: ""
	  })
  }

  render() {
	  const {input} = this.state;
    return (
      <div className='App'>
		<div className='calc-wrapper'>
			<div className='row'>
				<Input>{input}</Input>
			</div>
			<div className='row'>
				<Button 
					handleClick={this.addToInput}>9</Button>
				<Button	
					handleClick={this.addToInput}>8</Button>
				<Button
					handleClick={this.addToInput}>7</Button>
				<Button>/</Button>
			</div>
			<div className='row'>
				<Button
					handleClick={this.addToInput}>6</Button>
				<Button
					handleClick={this.addToInput}>5</Button>
				<Button
					handleClick={this.addToInput}>4</Button>
				<Button>*</Button>
			</div>
			<div className='row'>
				<Button
					handleClick={this.addToInput}>3</Button>
				<Button
					handleClick={this.addToInput}>2</Button>
				<Button
					handleClick={this.addToInput}>1</Button>
				<Button>+</Button>
			</div>
			<div className='row'>
				<Button
					handleClick={this.addDecimal}>.</Button>
				<Button
					handleClick={this.addZeroToInput}>0</Button>
				<Button>=</Button>
				<Button>-</Button>
			</div>
			<div className='row'>
				<Clear
					handleClear={this.handleClear}>Clear</Clear>
			</div>
		</div>
      </div>
    );
  }
}
