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

  .icon-input:hover {
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }

  .star-favorited:hover {
    background-color: #0B1A8E;
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
