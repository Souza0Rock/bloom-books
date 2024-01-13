import styled from "styled-components";
import Stack from "../Stack";

export const ContainerRowMode = styled(Stack)`
  flex-direction: column;

  @media (min-width: 1199px) {
    flex-direction: row;
  }
`;
