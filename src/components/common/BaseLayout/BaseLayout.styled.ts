import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
`;

export const ChildrenContent = styled.div<{
  backgroundImage?: string;
}>`
  padding: 1rem;
`;
