import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import '../styles/StepContent3.css';


class StepContent3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
        }

    }
    handleOptionSelect = (option) => {
        this.setState({ selectedOption: option });
    }
    render() {
        const { selectedOption } = this.state;
        const { active } = this.props;
        if (!active) {
            return null;
        }
        return (
            <div className="component-container">
                <p className='header'>How are you planning to use Eden?</p>
                <p className='sub-header'>We'll streamline your setup experience accordingly.</p>

                <div className='button-container'>
                    <button className='blue-button' onClick={() => this.handleOptionSelect('Option1')}
                        style={{ borderColor: selectedOption === 'Option1' ? '#5e28f3' : '#838282' }}>
                        <FontAwesomeIcon icon={faUser} style={{ color: "#838282", width: '40px', height: "40px" }} /><br></br>
                        <p className='button-text'>For MySelf</p>
                        <p className='button-subtext'>Write better. Think more clearly. Stay organized.</p>
                    </button>
                    <button className='blue-button' onClick={() => this.handleOptionSelect('Option2')}
                        style={{ borderColor: selectedOption === 'Option2' ? '#5e28f3' : '#838282' }}>
                        <FontAwesomeIcon icon={faUserGroup} style={{ color: "#838282", width: '40px', height: "40px" }} /><br></br>
                        <p className='button-text'>With my team</p>
                        <p className='button-subtext'>Wikis, docs, tasks & projects, all in one place.</p>
                    </button>
                </div>
            </div>
        );
    }
}

export { StepContent3 };
