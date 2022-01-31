import React, { Component } from 'react';
import Lottie from 'react-lottie';
import bank from '../assets/lotties/bank.json';

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      bank: bank,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <h1>Lottie</h1>
        <p>Base animation free from external manipulation</p>
        <Lottie
          options={defaultOptions}
          height={100}
          width={100}
        />
      </div>
    );
  }
}

export default UncontrolledLottie;