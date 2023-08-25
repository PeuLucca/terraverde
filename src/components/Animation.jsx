import React from 'react';
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';

const Section = styled.section`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s, transform 1.5s;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Animation = ({ children }) => {
  return (
    <Controller>
      <Scene classToggle="fade-in" reverse={false} triggerHook={0.8}>
        {(progress, event) => (
          <Section className={event === 'enter' ? 'fade-in' : ''}>{children}</Section>
        )}
      </Scene>
    </Controller>
  );
};

export default Animation;
