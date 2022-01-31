import React, { Component } from 'react';
import Lottie from 'react-lottie';
import bank from '../assets/lotties/bank.json';

class ControlledLottie extends Component {
  state = { isStopped: false, isPaused: false };

  render() {
    const buttonStyle = {
      display: 'flex',
      margin: '10px auto',
      marginRight: '10px',
      border: 'none',
      color: 'white',
      backgroundColor: '#647DFF',
      borderRadius: '2px',
      fontSize: '15px',
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      bank: bank,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div className="controlled">
        <h1>Controlled Lottie</h1>
        <p>Uses state manipulation to start, stop and pause animations</p>
        <Lottie
          options={defaultOptions}
          height={100}
          width={100}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
          Stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isStopped: false, isPaused: false })}
        >
          Play
        </button>
        <button
          style={buttonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
          Pause
        </button>
      </div>
    );
  }
}

export default ControlledLottie;