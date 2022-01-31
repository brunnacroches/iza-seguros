import React, { Component } from 'react';
import Lottie from 'react-lottie';
import people from '../assets/lotties/people.json';

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: people,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie
          options={people}
        />
      </div>
    );
  }
}

export default UncontrolledLottie;