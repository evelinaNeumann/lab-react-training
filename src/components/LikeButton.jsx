import React, { useState } from 'react';
const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const [colorIndex, setColorIndex] = useState(0);
  
    const handleLike = () => {
      setLikes(likes + 1);
      setColorIndex((colorIndex + 1) % colors.length);
    };
  
    const buttonStyle = {
      backgroundColor: colors[colorIndex],
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    };
  
    return (
      <button style={buttonStyle} onClick={handleLike}>
        {likes} Likes
      </button>
    );
  };
  
  export default LikeButton;
  