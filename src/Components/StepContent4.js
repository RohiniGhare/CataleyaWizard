import React, { Component } from 'react';
import '../styles/StepContent4.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

class StepContent4 extends Component {
  restartPage = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  render() {
    const { active } = this.props;
    if (!active) {
      return null;
    }
    return (
      <div className="contents">
        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#5e28f3", width:"60px", height:"60px" }}/>
        <p className='header'>Congratulations</p>
        <p className='sub-header'>You have completed onboarding, you can start using eden!.</p>
        <button className='launch' onClick={this.restartPage}>Launch Eden</button>
      </div>
    );
  }
}

export { StepContent4 };