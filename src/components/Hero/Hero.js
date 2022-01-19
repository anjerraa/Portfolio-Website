import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        [Mai] Personal Portfolio!
      </SectionTitle>
      <SectionText>
        Hi there! I am a second year Software Engineering student at the 
        University of New South Wales (Sydney, Australia). I have experience 
        with Python, C and MIPS Assembly. I am currently learning Javascript 
        through a variety of personal projects, such as making a todo list, a
        Discord bot and this portfolio website!
      </SectionText>
      <Button onClick={() => window.location = "#projects"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;