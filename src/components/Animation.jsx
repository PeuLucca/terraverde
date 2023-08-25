import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled(motion.section)`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s, transform 0.5s;

  &.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Animation = ({ children }) => {
  const sectionRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && shouldAnimate) {
          section.classList.add('fade-in');
          setShouldAnimate(false);
          observer.unobserve(section);
        }
      });
    }, {
      threshold: 0.8
    });

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [shouldAnimate]);

  return (
    <Section ref={sectionRef}>
      {children}
    </Section>
  );
};

export default Animation;
