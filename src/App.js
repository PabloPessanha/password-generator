import React, { useState } from 'react';
import { ButtonGenerator } from './components';
import './styles/GlobalStyles.css';

function App() {
  const [size, setSize] = useState(6);
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1>Random password generator</h1>
      <h2>{`${size} caracteres de senha`}</h2>
      <input
        type="range"
        min="6"
        max="18"
        value={ size }
        onChange={ ({ target }) => setSize(Math.round(target.value)) }
      />
      <ButtonGenerator size={ size } setPassword={ setPassword } />
      { password && <h4>{password}</h4>}
    </div>
  );
}

export default App;
