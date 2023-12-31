import React, { Component } from 'react';
import '../styles/Hero.css';
import { Button } from 'react-bootstrap';

class Hero extends Component {
  render() {
    const { id } = this.props;

    return (
      <div className='hero-container' id={id}>
        <div id='hero-left'>
          <h2>Take control of your job search journey today!</h2>
          <div id='hero-buttons'>
            <Button
              id='try-button'
              size='lg'
              onClick={() => this.props.toggleLoginModal()}
            >
              Get started with the demo!
            </Button>
          </div>
        </div>
        <div id='hero-right'>
          <img id='hero-image' src='../images/hero.png' alt='Pizza' />
        </div>
      </div>
    );
  }
}

export default Hero;
