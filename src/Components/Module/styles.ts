import styled from "styled-components";

export const ComponentModule = styled.button`
  position: relative;
  width: 120px;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const CircleProgress = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;

  width: 160px;
  height: 160px;
  transform: translate(-20px,-20px);

  circle {
    fill: transparent;
    stroke-linecap: round;
    stroke-width: 10px;
    stroke: #ffc800;
    transform: translate(0, 0);
    stroke-dasharray: 376.9;
    stroke-dashoffset: 0;
  }

  & circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #22262b;
  }

  & circle:nth-child(2) {
    transition: stroke 0.3s ease 0s, stroke-dashoffset 0.45s ease 0s;
  }
`;

export const Ilustration = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;

  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: teal;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: whitesmoke;
  margin-top: 1rem;
`;

