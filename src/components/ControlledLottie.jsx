import React, { Component } from 'react';
import Lottie from 'react-lottie';
import people from '../assets/lotties/people.json';

class ControlledLottie extends Component {
  state = { isStopped: false, isPaused: false };

  render() {
    const bottonStyle = {
      display: 'flex',
      margin: '0px auto',
      marginRight: '0px',
      border: 'none',
      color: 'white',
      backgroundColor: '#E0D3FF',
      borderRadius: '2px',
      fontSize: '15px',
    };

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: people,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div className="controlled">
        <Lottie
          options={defaultOptions}
          height={10}
          width={10}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
        <botton
          style={bottonStyle}
          onClick={() => this.setState({ isStopped: true })}
        >
        </botton>
        <botton
          style={bottonStyle}
          onClick={() => this.setState({ isStopped: false, isPaused: false })}
        >
        </botton>
        <botton
          style={bottonStyle}
          onClick={() => this.setState({ isPaused: !this.state.isPaused })}
        >
        </botton>
      </div>
    );
  }
}

export default ControlledLottie;