import styled from "styled-components";
import Stack from "@/components/common/Stack";
import { TGridOrientation } from "@/contexts/GridOrientation";

export const Container = styled(Stack)<{ gridOrientation: TGridOrientation }>`
  @media (min-width: 1199px) {
    .box-grid {
      justify-content: ${({ gridOrientation }) =>
        gridOrientation === "blocks" ? "space-between" : "flex-start"};
    }
  }
`;
