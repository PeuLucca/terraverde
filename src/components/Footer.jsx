import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 20px 0;
  text-align: center;
`;

const FooterTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const FooterText = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 20px;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #eecc22;
  }
`;

const Footer = () => {
  return (
    <FooterContainer id='faleconosco'>
      <img 
        src='https://logosmarcas.net/wp-content/uploads/2020/09/John-Deere-Logo.png'
        style={{height: '100px'}}
        />
      <FooterTitle>Terraverde Máquinas Agrícolas</FooterTitle>
      <FooterText>CNPJ: 09.282.594/0011-17</FooterText>
      <FooterText>Entre em contato:</FooterText>
      <SocialLinks>
        <SocialLink href="https://www.instagram.com/terraverdemaquinas/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/agroterrass" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </SocialLink>
        <SocialLink href="https://www.youtube.com/terraverdemaquinas" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/company/terraverdemaquinas" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </SocialLink>
        <SocialLink href="mailto:casabranca@terraverdeagro.com.br" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
      <FooterText>&copy; {new Date().getFullYear()} Terraverde Máquinas Agrícolas</FooterText>
    </FooterContainer>
  );
};

export default Footer;
