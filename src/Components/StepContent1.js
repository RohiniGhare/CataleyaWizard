import React, { Component } from 'react';
import '../styles/StepContent1.css';

class StepContent1 extends Component {
  render() {
    const { active } = this.props;
    if (!active) {
      return null;
    }
    return (
      <div className="contents">
        <p className='header'>Welcome First things first...</p>
        <p className='sub-header'>You can always change them later.</p>

        <div className='input-group'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            name='fullName'
            placeholder='Steve Jobs'
            required={true} />
        </div>
        <div className='input-group'>
          <label htmlFor='displayName'>Display Name</label>
          <input
            name='displayName'
            placeholder='Steve'
            required={true} />
        </div>
      </div>
    );
  }
}

export { StepContent1 };
