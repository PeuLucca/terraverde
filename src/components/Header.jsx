// Core
import React from 'react';
import { FaPlay } from 'react-icons/fa';

// Style
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
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 10em;

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
  return (
    <>
        <HeaderContainer>
        <Logo>
          <img 
          src="https://s3.amazonaws.com/gupy5/production/companies/5845/career/14498/images/2023-03-24_12-22_companyLogoUrl.png" 
          alt="TerraverdeAgro"
          style={{height: '120px'}}
          />
        </Logo>
        <Menu>
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
