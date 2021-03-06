import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Varela Round', sans-serif;
  }

  body {
    background-color: #060e19;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display:flex;
  margin-top: 80px;
  justify-content: center;
  align-items: start;
  column-gap: 32px;
`;
