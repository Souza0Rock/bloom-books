import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  margin-top: 2.5rem;
  width: 100vw;
  height: calc(100vh - 2.5rem);
  display: flex;
  position: fixed;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    margin-top: 3.75rem;
  }
`;

export const OverlaySecondary = styled.div`
  width: 100%;
  height: 3.75rem;
  position: fixed;
  top: 0;
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`;

export const Sidebar = styled.div`
  position: absolute;
  right: 0;
  width: 85%;
  height: calc(100vh - 2.5rem);
  background-color: #fff;
  border-top: 6px solid #0b1a8e;
  animation: ${slideIn} ease-in 0.25s;
  padding: 0.75rem;
  overflow-x: auto;

  @media (min-width: 768px) {
    width: 25.5rem;
    height: calc(100vh - 3.75rem);
  }
`;
