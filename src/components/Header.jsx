import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;


const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 3em;

  @media (max-width: 768px) {
    margin-left: 0; /* Add this line */
    margin-right: 33%;
  }
`;


const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    margin-right: 1em;
    z-index: 99999;
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: #000000c5;
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 18px;
    margin-right: 20px;
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: #437D30;
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    z-index: 9999;
    flex-direction: column;
    background-color: white;
    position: absolute;
    width: 100%;
    margin-top: -8%;
    top: 60px;
    left: 0;
    transition: transform 0.5s;
    transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
    border: 2px solid #437D30;
    padding: 1em;

    a {
      font-size: 20px;
    }
  }
`;

const ButtonStyle = styled.button`
  margin: 10px;
  color: #437D30;
  background-color: white;
  font-size: 20px;
  border: 2px solid #437D30;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #437D30;
    color: white;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <HeaderContainer>
        <Hamburger onClick={toggleMenu}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              d="M4 7h22M4 15h22M4 23h22"
            />
          </svg>
        </Hamburger>
        <Logo>
          <img
            src="https://s3.amazonaws.com/gupy5/production/companies/5845/career/14498/images/2023-03-24_12-22_companyLogoUrl.png"
            alt="TerraverdeAgro"
            style={{ height: '120px' }}
          />
        </Logo>
        <Menu open={menuOpen}>
          <a href="#menu">Menu</a>
          <a href="#rental">Rental</a>
          <a href="#noticias">Notícias</a>
          <a href="#localizacao">Localização</a>
          <a href="#faleconosco">Fale Conosco</a>
          <a href="https://play.google.com/store/apps/details?id=com.deere.myoperations" target='_blank'>
            <ButtonStyle>
              Baixe o app <FaPlay style={{ verticalAlign: 'middle', marginLeft: '5px' }} />
            </ButtonStyle>
          </a>
        </Menu>
      </HeaderContainer>
    </>
  );
};

export default Header;
