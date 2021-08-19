import React from 'react';
import Module from '../../Components/Module';

import { Container } from './styles';

function Home(): JSX.Element {
  return (
    <Container>
      <Module completionPercentage={0} name="Família" />
      <Module completionPercentage={75} name="Comprimentos" />
      <Module completionPercentage={50} name="Introdução" />
    </Container>
  );
}

export default Home;
