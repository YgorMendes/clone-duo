import React from 'react';
import Module from './Components/Module';
import GlobalStyles, { Container } from './styles/GlobalStyles';

function App() {
  return (
    <Container>
      <Module completionPercentage={50} />
      <Module completionPercentage={75} />

      <GlobalStyles />
    </Container>
  );
}

export default App;
