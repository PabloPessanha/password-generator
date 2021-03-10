import React, { useState } from 'react';
import ButtonGenerator from './components/ButtonGenerator';
import './styles/GlobalStyles.css';

function App() {
  const [size, setSize] = useState(6);
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1>Random password generator</h1>
      <h2>{`${size} Characters`}</h2>
      <span className="chars-qty">Min: 6 | Max: 18</span>
      <div>
        <input
          id="range-input"
          type="range"
          min="6"
          max="18"
          value={ size }
          onChange={ ({ target }) => setSize(target.value) }
        />
      </div>
      <ButtonGenerator size={ size } setPassword={ setPassword } />
      { password && (
        <div className="password">
          <h4>{password}</h4>
        </div>
      )}
    </div>
  );
}

export default App;
