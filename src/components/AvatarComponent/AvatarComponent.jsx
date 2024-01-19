import { Avatar } from 'components/ContactItem/ContactItem.styled';
import React, { useState, useEffect } from 'react';

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return '#' + '0'.repeat(6 - randomColor.length) + randomColor;
}

const getFirstLetter = name => name.split('')[0];

const AvatarComponent = ({ isChecked, isExpanded, name }) => {
  const [avatarColor, setAvatarColor] = useState('');

  useEffect(() => {
    if (!isChecked || !isExpanded) {
      const color = getRandomColor();
      setAvatarColor(color);
    }
  }, [isChecked, isExpanded]);

  return (
    <Avatar style={{ color: avatarColor, width: '50px', height: '50px' }}>
      <h1>{getFirstLetter(name)}</h1>
    </Avatar>
  );
};

export default AvatarComponent;
