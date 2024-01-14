import styled from "styled-components";
import { TStyles } from "./types";

export const calcSpace = (space: number | string): string | number => {
  if (!space) {
    return 0;
  }

  if (typeof space === "number") {
    return `${space * 16}px`;
  }

  if (typeof space === "string") {
    return space;
  }

  return space;
};

export const Text = styled.span<TStyles>`
  font-size: ${({ fontSize }) => fontSize}px;
  // eslint-disable-next-line react/prop-types
  text-transform: ${({ textTransform }) => textTransform};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};
  cursor: ${({ cursorPointer }) => (cursorPointer ? "pointer" : "auto")};
  line-height: ${({ lineHeigth = "normal" }) => calcSpace(lineHeigth)};
  font-style: ${({ italic = false }) => (italic ? "italic" : "normal")};
`;
