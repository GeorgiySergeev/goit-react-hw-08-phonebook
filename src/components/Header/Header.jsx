import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HeaderContainer, AuthNav } from './Header.styled';
import Button from '../Button/Button';
import UserMenu from 'components/UserMenu/UserMenu';
// import { useState } from 'react';
import {
  selectIsLogedIn,
  selectUserName,
} from '../../redux/auth/auth-selectors';

export const Header = ({ text, span }) => {
  const isLogin = useSelector(selectIsLogedIn);
  const userName = useSelector(selectUserName);

  const onClick = () => {};

  return (
    <HeaderContainer>
      <Link to="/" style={{ display: 'flex' }}>
        <h1 style={{ color: '#E05160' }}>{text}</h1>
        <h1>{span}</h1>
      </Link>

      {isLogin ? (
        <UserMenu user={userName} />
      ) : (
        <AuthNav>
          <Link to="/login">
            {/* <h3 style={{ color: '#E05160' }}>Log in</h3> */}
            <Button eventHandler={onClick} text="Log in" />
          </Link>
          {/* <Link to="/register">Register</Link> */}
        </AuthNav>
      )}
    </HeaderContainer>
  );
};
