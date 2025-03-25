declare module '*.tsx' {
  import { FC } from 'react';
  const component: FC;
  export default component;
}

declare module './components/About' {
  import { FC } from 'react';
  const About: FC;
  export default About;
}

declare module './components/Hero' {
  import { FC } from 'react';
  const Hero: FC;
  export default Hero;
}

declare module './components/Skills' {
  import { FC } from 'react';
  const Skills: FC;
  export default Skills;
}

declare module './components/Projects' {
  import { FC } from 'react';
  const Projects: FC;
  export default Projects;
}

declare module './components/Contact' {
  import { FC } from 'react';
  const Contact: FC;
  export default Contact;
}

declare module './components/Footer' {
  import { FC } from 'react';
  const Footer: FC;
  export default Footer;
} 