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

  divide = () => {
	  this.state.previosNumber = this.state.input;
	  this.setState({input: ""});
	  this.state.operator = 'divide';
  }

  substraction = () => {
	this.state.previosNumber = this.state.input;
	this.setState({input: ""});
	this.state.operator = 'substract';
}

multiply = () => {
	this.state.previosNumber = this.state.input;
	this.setState({input: ""});
	this.state.operator = 'multiply';
}

add = () => {
	this.state.previosNumber = this.state.input;
	this.setState({input: ""});
	this.state.operator = 'add';
}


  evaluate = () => {
	  this.state.currentNumber = this.state.input;
	if(this.state.operator == 'substract') {
		this.setState({
			input: parseInt(this.state.previosNumber) - parseInt(this.state.currentNumber)
		})
	} else if (this.state.operator == 'divide') {
		this.setState({
			input: parseInt(this.state.previosNumber) / parseInt(this.state.currentNumber)
		})
	} else if (this.state.operator == 'multiply') {
		this.setState({
			input: parseInt(this.state.previosNumber) * parseInt(this.state.currentNumber)
		})
	} else if (this.state.operator == 'add') {
		this.setState({
			input: parseInt(this.state.previosNumber) + parseInt(this.state.currentNumber)
		})
	}
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
				<Button
					handleClick={this.divide}>/</Button>
			</div>
			<div className='row'>
				<Button
					handleClick={this.addToInput}>6</Button>
				<Button
					handleClick={this.addToInput}>5</Button>
				<Button
					handleClick={this.addToInput}>4</Button>
				<Button
					handleClick={this.multiply}>*</Button>
			</div>
			<div className='row'>
				<Button
					handleClick={this.addToInput}>3</Button>
				<Button
					handleClick={this.addToInput}>2</Button>
				<Button
					handleClick={this.addToInput}>1</Button>
				<Button
					handleClick={this.add}>+</Button>
			</div>
			<div className='row'>
				<Button
					handleClick={this.addDecimal}>.</Button>
				<Button
					handleClick={this.addZeroToInput}>0</Button>
				<Button
					handleClick={this.evaluate}>=</Button>
				<Button 
					handleClick={this.substraction}>-</Button>
			</div>
			<div className='row'>
				<Clear
					handleClear={this.clearInput}>Clear</Clear>
			</div>
		</div>
      </div>
    );
  }
}
