import styled from "styled-components";
import Stack from "../Stack";

export const Container = styled(Stack)`
  margin-top: 5.75rem;

  .title {
    max-width: 46%;
  }

  @media (min-width: 576px) {
    .box-controls-grid {
      gap: 2.75rem;
    }
  }

  @media (min-width: 768px) {
    padding: 0.5rem 7.5rem;
    margin-top: 3.75rem;
  }
`;
