import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 60px;
    flex-direction: row;
  }
`;

const Image = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    flex: 0 0 40%;
    ${props => props.order === 'imgFirst' ? 'margin-right: 20px;' : 'margin-left: 20px;'}
  }
`;


const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  h2 {
    font-size: 30px;
    margin-bottom: 10px;
    text-transform: ${props => props.mobileOnly ? 'uppercase' : 'none'};
  }

  h3 {
    font-size: 20px;
    color: #16161D;
  }

  @media (max-width: 767px) {
    h2 {
      font-size: 20px;
      max-width: 100%;
    }

    h3 {
      display: none;
    }
  }
`;

const Content = ({ imageSrc, title, text, order, component }) => {
  const isImageFirst = order === 'imgFirst';

  return (
    <div id='rental'>
      <Container>
        {isImageFirst && (
          <Image order={order}>
            <img src={imageSrc} alt="Info" />
          </Image>
        )}
        <ContentWrapper mobileOnly={!isImageFirst}>
          <h2>{title}</h2>
          {isImageFirst && <h3>{text}</h3>}
          {component}
        </ContentWrapper>
        {!isImageFirst && (
          <Image order={order}>
            <img src={imageSrc} alt="Info" />
          </Image>
        )}
      </Container>
    </div>
  );
};

export default Content;
