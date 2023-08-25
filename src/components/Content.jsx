// Core
import React from 'react';

// Style
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 60px;
`;

const Image = styled.div`
  flex: 0 0 40%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

const Content = ({ imageSrc, title, text, order, component }) => {

    let jsx = null;
    if(order === 'imgFirst') {
        jsx = 
        <Container>
            <Image style={{ paddingRight: '20px' }}>
            <img src={imageSrc} alt="Info" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
            </Image>
            <ContentWrapper>
                <h2 style={{ fontSize: '30px;', marginBottom: '10px', width: '80%' }}>{title}</h2>
                <h3 style={{ fontSize: '18px', width: '80%', color: '#16161D' }}>{text}</h3>
                {component}
            </ContentWrapper>
        </Container>
    } else {
        jsx = 
        <Container>
            <ContentWrapper>
                <h2 style={{ fontSize: '30px;', marginBottom: '10px', textTransform: 'uppercase' }}>{title}</h2>
                <h3 style={{ fontSize: '18px', color: '#16161D' }}>{text}</h3>
                {component}
            </ContentWrapper>
            <Image style={{ marginRight: '10%' }}>
                <img src={imageSrc} alt="Info" style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} />
            </Image>
        </Container>
    }

  return (
    <div id='rental'>
      {jsx}
    </div>
  );
};

export default Content;
