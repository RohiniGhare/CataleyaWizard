import React, { Component } from 'react';

class StepComponent extends Component {
    render() {
      const { number, active } = this.props;
      return (
        <div className={`step ${active ? 'active' : ''}`}>
          {number}
        </div>
      );
    }
}

export {StepComponent};