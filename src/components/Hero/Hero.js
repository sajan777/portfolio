import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const handleClick = ()=>{
  window.location.href= "https://www.linkedin.com/in/sajan-arora/"; 
}
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hello There, I am a programmer, passionate about problem solving and in love with Javascript.
        </SectionText>
        <Button onClick={handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;