import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/Hero.css';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.setState({ windowWidth: window.innerWidth });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  getImageSrc = () => {
    const { windowWidth } = this.state;
    if (windowWidth < 1000 && windowWidth > 551) {
      return '../images/hero-tablet.png';
    } else if (windowWidth < 550) {
      return '../images/hero-mobile.png';
    }
    return '../images/hero.png';
  };

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
          <img id='hero-image' src={this.getImageSrc()} alt='Hero' />
        </div>
      </div>
    );
  }
}

export default Hero;
