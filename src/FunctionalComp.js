import './App.css';
import React from 'react'

const FunctionalComp = () => {
    return (
        <div className='components'>
            <div className='functional'>
                <h1>This is created using functional component</h1>
                <p>This is done by using external css</p>
                <p style={{ color: 'blue' }}>This is done by using inline CSS</p>
            </div>
        </div>

    )
}

export default FunctionalComp;
