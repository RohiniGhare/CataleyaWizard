import React, { Component } from 'react';
import './App.css';
import { StepComponent } from './Components/StepComponent';
import { StepContent } from './Components/StepContent';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      totalSteps: 4,
    };
  }

  nextStep = () => {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
    }));
  };

  render() {
    const { currentStep, totalSteps } = this.state;

    return (
      <div className="App">
        <div className='details-component'>
          <h1>Eden</h1>
          <div className="progress-bar">
            {Array.from({ length: totalSteps }, (_, index) => (
              <StepComponent
                key={index}
                number={index + 1}
                active={currentStep === index + 1}
              />
            ))}
          </div>
          <div className="step-contents">
            {Array.from({ length: totalSteps }, (_, index) => (
              <StepContent
                key={index}
                number={index + 1}
                active={currentStep === index + 1}
              />
            ))}
          </div>
          <button
            onClick={this.nextStep}
            disabled={currentStep === totalSteps}
            hidden={currentStep === totalSteps}
          >
            Create Workspace
          </button>
        </div>
      </div>
    );
  }
}

export default App;
