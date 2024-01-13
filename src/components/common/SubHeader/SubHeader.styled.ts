import styled from "styled-components";
import Stack from "../Stack";

export const Container = styled(Stack)`
  @media (min-width: 576px) {
    .box-controls-grid {
      gap: 2.75rem;
    }
  }

  @media (min-width: 768px) {
    padding: 0.5rem 7.5rem;
  }
`;
