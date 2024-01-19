import React from 'react';
import { FooterContainer } from './Footer.styled';
import { Link } from 'react-router-dom';
import logo from '../../assets/GoIT.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Link to="https://github.com/GeorgiySergeev" target="_blank">
        Georgiy Sergeev.
      </Link>
      <Link to="https://goit.global/ua/" target="_blank">
        <img src={logo} alt="logo" style={{ width: 55 }} />
      </Link>{' '}
      2024 FSON92
    </FooterContainer>
  );
};

export default Footer;
