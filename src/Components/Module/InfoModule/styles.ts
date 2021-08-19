import styled from "styled-components";
interface ComponentInfoModuleProps {
  isOpen: boolean;
}

export const ComponentInfoModule = styled.button<ComponentInfoModuleProps>`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: relative;
  bottom: -1.5rem;
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  background-color: #373c42;
  outline: none;
  border: none;
  cursor: default;
  z-index: 20;

  & > p {
    margin-bottom: 1rem;
    color: whitesmoke;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -10px;
    right: calc(50% - 10px) ;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #373c42;
  }
`;

