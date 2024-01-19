import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../../redux/auth/auth-selectors';

import { LinkContainer, StyledArrow } from './GoToAppLink.styled';

const GoToAppLink = () => {
  const isLoggedIn = useSelector(selectIsLogedIn);

  return (
    <LinkContainer>
      <Link
        to="/contacts"
        style={{ color: '#E05160', zIndex: 99, fontWeight: 700 }}
      >
        {!isLoggedIn ? 'Let`s start' : 'My contacts'}
      </Link>
      <StyledArrow />
    </LinkContainer>
  );
};

export default GoToAppLink;
