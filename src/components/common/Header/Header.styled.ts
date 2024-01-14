import styled from "styled-components";
import Stack from "../Stack";

export const Container = styled(Stack)`
  z-index: 9;
  width: 100%;
  position: fixed;

  .input-mobile {
    padding-right: 1rem;
  }

  .input-desktop {
    display: none;
  }

  @media (min-width: 768px) {
    height: 3.75rem;
    padding: 0 7.5rem;
    justify-content: center;

    .input-desktop {
      display: flex;
      margin-right: 4.875rem;
    }

    .input-mobile {
      display: none;
    }

    .star-favorited {
      height: 3.75rem;
      width: 4rem;
    }
  }
`;
