import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const ChildrenContent = styled.div<{
  backgroundImage?: string;
  centerChildVertically?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ centerChildVertically }) =>
    centerChildVertically ? "center" : "flex-start"};
  align-items: center;
  min-height: calc(
    100vh - ${({ backgroundImage }) => (backgroundImage ? 176 : 467)}px
  );
  margin: ${({ backgroundImage }) => (backgroundImage ? "0" : "2rem 0 4.5rem")};
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
