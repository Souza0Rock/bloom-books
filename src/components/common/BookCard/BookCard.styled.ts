import styled from "styled-components";
import Stack from "../Stack";

export const ContainerCardRow = styled(Stack)`
  .image-row {
    margin: 0 1rem;
  }

  .publisher {
    margin: 0.75rem 0 0.625rem;
  }

  @media (min-width: 768px) {
    .image-row {
      width: 135px;
      height: 167px;
      /* margin-left: 0; */
    }

    .title {
      font-size: 16px;
    }

    .publisher {
      margin-bottom: 0.5rem;
    }

    .content-text {
      font-size: 14px;
    }
  }
`;

export const ContainerCardBlock = styled(Stack)`
  max-width: 153px;
  margin-bottom: 2.25rem;

  .image-block {
    margin: 0 auto;
  }

  .publisher {
    margin: 0.75rem 0 0.625rem;
  }

  @media (min-width: 768px) {
    gap: 1rem;

    .title {
      font-size: 16px;
    }

    .publisher {
      margin-bottom: 0.5rem;
    }

    .content-text {
      font-size: 14px;
    }
  }
`;
