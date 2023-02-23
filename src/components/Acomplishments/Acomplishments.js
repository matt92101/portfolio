import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "", text: 'Attained a wide range of technical skills that supports adaptiblity to change.'},
  { number: "", text: 'Created diversified projects showcasing in demand features   ', },
  { number: "", text: 'Built a strong community of support with industry leaders', },
  { number: "", text: 'Acquired personal growth in time management, problem-solving, and resilience. ', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
