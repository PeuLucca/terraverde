// Core
import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faShoppingCart  } from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from 'react-icons/fa';

// Components
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import News from './components/News';
import Maps from './components/Maps';
import Footer from './components/Footer';
import Animation from './components/Animation';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

const WhatsAppIcon = styled.a`
z-index: 99999;
position: fixed;
bottom: 20px;
right: 20px;
background-color: #25d366;
color: white;
display: flex;
align-items: center;
justify-content: center;
width: 60px;
height: 60px;
border-radius: 50%;
font-size: 24px;
text-decoration: none;
transition: background-color 0.3s, transform 0.3s;

&:hover {
  background-color: #128c7e;
  transform: scale(1.1);
}
`;

const ButtonStyle = styled.button`
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

  @media (max-width: 768px) {
    margin-top: 2%;
    margin-left: 22%;
  }

`;

const Paragrafo = styled.p`
  font-size: 17px;
  width: 75%;
  background-color: #EEC22C;
  padding: 15px;
  border-radius: 15px;
  font-family: Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    margin-left: -4%;
  }
`;


function App() {

  const imagesMenu = [
    require('./img/1.png'),
    require('./img/2.png'),
    require('./img/3.png'),
  ];

  return (
    <AppWrapper>

      <WhatsAppIcon href="https://api.whatsapp.com/send?phone=5519971100603" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </WhatsAppIcon>

      <Header />

      <Animation>
        <Menu images={imagesMenu} />
      </Animation>

      <Animation>
        <Content
          imageSrc={'https://www.deere.com.br/assets/images/region-3/industries/lawn-and-garden/r2c010445_LSC-equipamentos-para-jardinagem-desktop-877x493.jpg'} 
          title="SERVIÇO DE QUALIDADE, REFERÊNCIA E SATISFAÇÃO"
          text="Fale com nossa equipe altamente especializada e encontre o melhor produto para sua necessidade."
          component={
            <>
            <Paragrafo>
              Com uma equipe altamente especializada, a empresa Terraverde Rental faz parte do grupo Terraverde, que atua há 19 anos como concessionário John Deere.
              <br /><br />Portanto, estendemos aos clientes Rental a cultura de atendimento e excelência em pós-vendas do grupo Terraverde.
            </Paragrafo>
            <a href="https://www.terraverdeagro.com.br/contact" target='_blank'>
            <ButtonStyle>
              Fale Conosco <FontAwesomeIcon  style={{marginLeft: '5px'}} icon={faArrowRight} className="arrow-icon" />
            </ButtonStyle>
            </a>
            </>
          }
          order={'imgFirst'}
        />
      </Animation>

      <Animation>
        <Content
            imageSrc={'https://www.deere.com.br/assets/images/region-3/industries/lawn-and-garden/r4x000716gators-desktop.png'} 
            title="Torne leve o trabalho pesado"
            text="Gator™ Veículos Utilitários"
            component={
              <>
              <Paragrafo>
              Confiáveis e práticos, os Gators John Deere apresentam capacidade e robustez superior para transpor os desafios mais difíceis, tornando as tarefas do dia a dia mais simples e prazerosas.
              <br /><br />
              </Paragrafo>
              <a href="https://www.terraverdeagro.com.br/page/pt/equipamentos-para-jardinagem/" target='_blank'>
                <ButtonStyle>
                  <FontAwesomeIcon  style={{marginLeft: '5px'}} icon={faShoppingCart} className="arrow-icon" /> Comprar Agora
                </ButtonStyle>
              </a>
              </>
            }
            order={'textfirst'}
          />
      </Animation>

      <Animation>
        <News />
      </Animation>

      <Animation>
        <Maps />
      </Animation>

      <Footer />
    </AppWrapper>
  );
}

export default App;
