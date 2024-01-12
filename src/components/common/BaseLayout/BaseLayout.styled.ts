import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const ChildrenContent = styled.div<{
  backgroundImage?: string;
  centerChildVertically?: boolean;
}>`
  min-height: calc(
    100vh - ${({ backgroundImage }) => (backgroundImage ? 176 : 130)}px
  );
`;
