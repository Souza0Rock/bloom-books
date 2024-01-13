import styled from "styled-components";
import Stack from "../Stack";

export const Container = styled(Stack)`
  @media (min-width: 768px) {
    .children-content {
      margin: 7.5rem;
      margin-top: 1.5rem;
    }
  }
`;
