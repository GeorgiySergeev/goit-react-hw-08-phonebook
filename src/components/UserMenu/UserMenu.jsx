import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../redux/auth/auth-operations';

import { StyledIcon, User, UserProfile } from './UserMenu.styled';

import { RxExit } from 'react-icons/rx';
import defaultAvatar from '../../assets/user-97890_640.png';

const UserMenu = ({ user }) => {
  const dispatch = useDispatch();
  const [isExpanded, setIsExpanded] = useState(false);
  const avatar = defaultAvatar;
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <User ref={menuRef}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h3>Welcome, {user}</h3>
          <img
            src={avatar}
            alt="user-avatart"
            width="32"
            style={{ marginLeft: 15 }}
          />
        </div>
        <StyledIcon
          onClick={handleToggleExpand}
          style={{ cursor: 'pointer' }}
        />
        {isExpanded && (
          <UserProfile>
            <Link to="#">Setting</Link>

            <button
              onClick={() => {
                dispatch(logout());
              }}
            >
              <div
                style={{
                  color: 'tomato',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                Exit <RxExit />
              </div>
            </button>
          </UserProfile>
        )}
      </User>
    </>
  );
};

export default UserMenu;
