// Core
import React from 'react';
import styled from 'styled-components';

// Component
import Table from './Table';

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const MapTitle = styled.h1`
  font-size: 40px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 30px;
`;

const GoogleMap = styled.iframe`
  width: 95%;
  height: 60vh;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Maps = () => {
  return (
    <MapContainer id='localizacao'>
      <MapTitle>Localização</MapTitle>
      <GoogleMap
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14717.995584689266!2d-47.59871!3d-22.7468595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c62f1c31e00c67%3A0x9cf518675a1eae2c!2sTerraverde!5e0!3m2!1spt-BR!2sbr!4v1692924373072!5m2!1spt-BR!2sbr"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></GoogleMap>
      <br/>
      <Table />
    </MapContainer>
  );
};

export default Maps;
