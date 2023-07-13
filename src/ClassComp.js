import React, { Component } from 'react';
import './App.css';

class ClassComp extends Component {
    render() {
        return (
            <div className='components'>
                <div className='classComp'>
                    <h1>This is created using class component</h1>
                    <p>This is done by using external css</p>
                    <p style={{ color: 'blue' }}>This is done by using inline CSS</p>
                </div>
            </div>

        )
    }
}

export default ClassComp;

