import styled, { css } from "styled-components";
import { calcSpace } from "@/utils/calcSpace";
import { IStyleProps } from "@/types/styles";

export const Container = styled.button<IStyleProps>`
  ${({ p, px, py, width, maxWidth, backgroundColor }) => css`
    width: ${width};
    max-width: ${maxWidth};
    padding-top: ${calcSpace(py || p)};
    padding-bottom: ${calcSpace(py || p)};
    padding-left: ${calcSpace(px || p)};
    padding-right: ${calcSpace(px || p)};
    background-color: ${backgroundColor};
  `}

  border: none;
  border-radius: 1.5rem;

  cursor: pointer;

  * {
    cursor: pointer;
  }
`;
