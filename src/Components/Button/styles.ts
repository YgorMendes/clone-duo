import styled from "styled-components";

export const ButtonElement = styled.button`
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  color: #373c42;
  border-radius: 12px;
  outline: none;
  border-style: none;
  cursor: pointer;

  background-color: ${props => props.color ? props.color : "#bdd0ea"};
`;

