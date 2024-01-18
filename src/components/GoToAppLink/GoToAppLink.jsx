import React from 'react';
import { Link } from 'react-router-dom';

import { LinkContainer, StyledArrow } from './GoToAppLink.styled';

const GoToAppLink = () => {
  return (
    <LinkContainer>
      <Link to="/contacts" style={{ color: '#E05160', zIndex: 99 }}>
        Go to App
      </Link>
      <StyledArrow />
    </LinkContainer>
  );
};

export default GoToAppLink;
