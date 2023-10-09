import React, { Component } from 'react';
import '../styles/StepContent2.css';

class StepContent2 extends Component {
    render() {
        const { active } = this.props;
        if (!active) {
            return null;
        }
        return (
            <div className="contents">
                <p className='header'>Let's set up a home for all your work</p>
                <p className='sub-header'>You can always create another workspace later.</p>
                
                <div className='input-group'>
                    <label htmlFor='workspaceName'>Workspace Name</label>
                    <input
                        name='workspaceName'
                        placeholder='Workspace Name'
                        required={true} />
                </div>
                <div className="input-group">
                    <label>Workspace Url (Optional)</label>
                    <div className='text-area'>
                        <span className="input-group-text">www.eden.com/</span>
                        <input className="form-control" placeholder="Example" required={false}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export { StepContent2 };
