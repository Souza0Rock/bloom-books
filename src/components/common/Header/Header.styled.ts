import styled from "styled-components";
import Stack from "../Stack";

export const Container = styled(Stack)`
  .input-desktop {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 7.5rem;

    .input-desktop {
      display: flex;
      margin-right: 7.625rem;
    }

    .input-mobile {
      display: none;
    }
  }
`;
