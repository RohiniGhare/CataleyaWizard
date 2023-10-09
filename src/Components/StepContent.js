import React, { Component } from 'react';
import { StepContent4 } from './StepContent4';
import { StepContent1 } from './StepContent1';
import { StepContent2 } from './StepContent2';
import { StepContent3 } from './StepContent3';

class StepContent extends Component {

  render() {
    const { number, active } = this.props;
    if (!active) {
      return null;
    }
    return (
      <div className="step-content">
        {
          number === 1 ?
            <StepContent1
              number={number}
              active={active} />
            : number === 2 ?
              <StepContent2
                number={number}
                active={active} />
              : number === 3 ?
                <StepContent3
                  number={number}
                  active={active} />
                : <StepContent4
                  number={number}
                  active={active} />

        }
      </div>
    );
  }
}

export { StepContent };
