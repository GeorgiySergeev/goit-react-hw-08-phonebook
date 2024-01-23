import React from 'react';
import { FooterContainer } from './Footer.styled';
import { Link } from 'react-router-dom';
import logoGoIt from '../../assets/GoIT.png';
import logoGit from '../../assets/GitHub-logo-2.png';

const Footer = () => {
  return (
    <FooterContainer>
      <Link
        to="https://github.com/GeorgiySergeev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoGit} alt="logo-git" style={{ width: 75 }} />
      </Link>
      <p style={{ color: 'white' }}>Georgiy Sergeev.</p>
      <Link
        to="https://goit.global/ua/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoGoIt} alt="logo-goit" style={{ width: 55 }} />
      </Link>{' '}
      <p style={{ color: 'white' }}>2024 FSON92</p>
    </FooterContainer>
  );
};

export default Footer;
