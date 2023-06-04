import React, { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleSeeAllClick = () => {
    setSelectedCountry(null);
  };

  const buttonStyle = {
    backgroundColor: '#ccc',
    
  };

  const activeButtonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <div className="facebook">
      <div className="country-buttons">
        <button
          onClick={handleSeeAllClick}
          style={!selectedCountry ? activeButtonStyle : buttonStyle}
        >
          See All
        </button>
        {profiles
          .map((profile) => profile.country)
          .filter((country, index, self) => self.indexOf(country) === index)
          .map((country) => (
            <button
              key={country}
              onClick={() => handleCountryClick(country)}
              style={selectedCountry === country ? activeButtonStyle : buttonStyle}
            >
              {country}
            </button>
          ))}
      </div>
      {profiles
        .filter((profile) => !selectedCountry || profile.country === selectedCountry) // Filter profiles based on selectedCountry
        .map((profile) => (
          <div className={`profile`} key={profile.lastName + profile.firstName}>
            <img src={profile.img} alt="Profile" style={imageStyle} />
            <div className="profile-info">
              <p>Name: {`${profile.firstName} ${profile.lastName}`}</p>
              <p>Country: {profile.country}</p>
              <p>Type: {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Facebook;
