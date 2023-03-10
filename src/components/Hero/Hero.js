import React from 'react';

import { Section, SectionText, SectionTitle, } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
    >> MATT KRUG . FYI <br />
      </SectionTitle>
      <SectionText>
        Developer Portfolio
      </SectionText>
      <Button onClick={() => window.location = "#about"}>About Me</Button>
    </LeftSection>

  </Section>
);

export default Hero;