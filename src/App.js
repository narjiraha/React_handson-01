import React, { useState } from 'react';
import ClassComp from './ClassComp';
import FunctionalComp from './FunctionalComp';

const App = () => {
  const [functionClick, setFunctionClick] = useState(false);
  const [classClick, setClassClick] = useState(false);

  const handleFunctionClick = () => {
    setFunctionClick(!functionClick);
  };

  const handleClassClick = () => {
    setClassClick(!classClick);
  };

  return (
    <div className='App'>
      <h1 className='heading'>Styling Using Function and Class Component</h1>
      <div className='buttons'>
        <button className='btnOne' onClick={handleFunctionClick}>
          Functional component change
        </button>
        <button className='btnTwo' onClick={handleClassClick}>
          Class component change
        </button>
      </div>

      <div className='ClassFunc'>
        <div>{functionClick && <FunctionalComp />}</div>
        <div>{classClick && <ClassComp />}</div>
      </div>
    </div>
  );
};

export default App;
