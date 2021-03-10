import React, { useState } from 'react';
import { ButtonGenerator } from './components';
import './styles/GlobalStyles.css';

function App() {
  const [size, setSize] = useState(6);
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1>Random password generator</h1>
      <input type="number" onChange={ ({ target }) => setSize(target.value) } />
      <ButtonGenerator size={ size } setPassword={ setPassword } />
      { password && <h2>{password}</h2>}
    </div>
  );
}

export default App;
