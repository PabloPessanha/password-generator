import React from 'react';
import PropTypes from 'prop-types';

const ButtonGenerator = ({ size, setPassword }) => {
  function generateRandomPassword() {
    const charset = 'abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789!@$';
    let randomPassword = '';

    for (let index = 0; index < size; index += 1) {
      const randomCharacter = Math.floor(Math.random() * charset.length);
      randomPassword += charset.charAt(randomCharacter);
    }

    setPassword(randomPassword);
  }

  return <button type="button" onClick={ generateRandomPassword }>Gerar senha</button>;
};

export default ButtonGenerator;

ButtonGenerator.propTypes = {
  size: PropTypes.number.isRequired,
  setPassword: PropTypes.func.isRequired,
};
