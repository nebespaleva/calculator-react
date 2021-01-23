import React, { Component } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Clear from './components/Clear'
import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  

  render() {
    return (
      <div className='App'>
		<div className='calc-wrapper'>
			<div className='row'>
				<Input></Input>
			</div>
			<div className='row'>
				<Button>9</Button>
				<Button>8</Button>
				<Button>7</Button>
				<Button>/</Button>
			</div>
			<div className='row'>
				<Button>6</Button>
				<Button>5</Button>
				<Button>4</Button>
				<Button>*</Button>
			</div>
			<div className='row'>
				<Button>3</Button>
				<Button>2</Button>
				<Button>1</Button>
				<Button>+</Button>
			</div>
			<div className='row'>
				<Button>.</Button>
				<Button>0</Button>
				<Button>=</Button>
				<Button>-</Button>
			</div>
			<div className='row'>
				<Clear>Clear</Clear>
			</div>
		</div>
      </div>
    );
  }
}
