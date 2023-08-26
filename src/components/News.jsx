import React from 'react';
import styled, { keyframes } from 'styled-components';

const NewsContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const NewsTitle = styled.h1`
  font-size: 50px;
  letter-spacing: 2px;
  margin: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const NewsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
  }
`;

const NewsItem = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  padding: 20px;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 768px) {
    flex: 0 0 100%; /* Occupy full width on smaller screens */
  }
`;

const NewsImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const NewsTitleText = styled.h2`
  font-size: 18px;
  margin-top: 10px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const ReadMoreButton = styled.button`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: #437D30;
  color: white;
  border: none;
  padding: 8px 15px;
  border: 2px solid #437D30;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: #437D30;
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const fadeInAnimation = keyframes`
  from {
    background-color: white;
  }
  to {
    background-color: #367C2B;
  }
`;

const SeeMoreButton = styled.button`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: white;
  color: #367C2B;
  border: 2px solid #367C2B;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
  transition: color 0.3s, border-color 0.3s;
  margin: 0;

  &:hover {
    background-color: #367C2B;
    color: white;
    animation: ${fadeInAnimation} 0.5s forwards;
  }
`;

const News = () => {
  const newsItems = [
    {
      imageSrc: 'https://www.terraverdeagro.com.br/sites/terraverdeagro.com.br/files/2021-03/Imagem-site.png',
      title: 'Taxa variável: o mecanismo de aplicação correta',
      site: 'https://www.terraverdeagro.com.br/node/2400'
    },
    {
      imageSrc: 'https://www.terraverdeagro.com.br/sites/terraverdeagro.com.br/files/2021-02/Imagem_2.jpg',
      title: 'Como prolongar a vida útil do motor? Saiba mais sobre a limpeza flush',
      site: 'https://www.terraverdeagro.com.br/node/2397'
    },
    {
      imageSrc: 'https://www.terraverdeagro.com.br/sites/terraverdeagro.com.br/files/2021-02/Imagem-topo_1.png',
      title: 'Terraverde consolida a fase 3 em agricultura de precisão',
      site: 'https://www.terraverdeagro.com.br/node/2395'
    }
  ];

  return (
    <div id='noticias'>
      <NewsContainer>
        <NewsTitle>Notícias</NewsTitle>
      </NewsContainer>
      <NewsGrid>
        {newsItems.map((item, index) => (
          <NewsItem key={index}>
            <a href={item.site} target='_blank' style={{ textDecoration: 'none', color: 'black' }}>
              <NewsImage src={item.imageSrc} alt={`Notícia ${index}`} />
              <NewsTitleText>{item.title}</NewsTitleText>
              <ReadMoreButton>Ler mais</ReadMoreButton>
            </a>
          </NewsItem>
        ))}
      </NewsGrid>
      <CenteredContainer>
        <a href='https://www.terraverdeagro.com.br/content/news' target='_blank'>
          <SeeMoreButton>Ver mais notícias</SeeMoreButton>
        </a>
      </CenteredContainer>
    </div>
  );
};

export default News;
