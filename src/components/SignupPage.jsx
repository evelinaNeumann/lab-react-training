import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = () => {
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const getGreeting = () => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'ua':
        return 'Добрий день';
      default:
        return '';
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: isEmailValid() ? 'green' : 'red' }}
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: isPasswordStrong() ? 'green' : 'red' }}
      />

      <label>Nationality:</label>
      <select value={nationality} onChange={handleNationalityChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="ua">Ukrainian</option>
      </select>

      <p>{getGreeting()}</p>

      <p>Your email is {email}</p>
    </div>
  );
};

export default SignupPage;
