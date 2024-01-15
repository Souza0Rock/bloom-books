import styled from "styled-components";
import Stack from "../Stack";

export const ContainerRowMode = styled(Stack)`
  flex-direction: column;

  @media (min-width: 1199px) {
    flex-direction: row;

    .box-link {
      gap: 0.75rem;
      flex-direction: row;
      align-items: center;
    }

    .box-updates {
      gap: 5.875rem;
      flex-direction: row;
    }
  }
`;
