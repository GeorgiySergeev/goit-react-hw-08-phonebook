import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HeaderContainer, AuthNav } from './Header.styled';

import UserMenu from 'components/UserMenu/UserMenu';
import { CiLogin } from 'react-icons/ci';

import {
  selectIsLogedIn,
  selectUserName,
} from '../../redux/auth/auth-selectors';

export const Header = ({ text, span }) => {
  const isLogin = useSelector(selectIsLogedIn);
  const userName = useSelector(selectUserName);

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
          <Link to="/login" style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ color: '#E05160' }}>Log in</h3>
            <CiLogin style={{ color: '#E05160' }}></CiLogin>
            {/* <Button eventHandler={onClick} text="Log in" /> */}
          </Link>
          {/* <Link to="/register">Register</Link> */}
        </AuthNav>
      )}
    </HeaderContainer>
  );
};
