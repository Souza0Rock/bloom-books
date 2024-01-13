import { IStyleProps } from "@/types/styles";
import styled, { css } from "styled-components";

const calcSpace = (space?: number | string) => {
  if (!space) {
    return 0;
  }

  if (typeof space === "number") {
    return `${space * 16}px`;
  }

  if (space === "auto") {
    return `auto`;
  }

  return space;
};

export const Container = styled.div<IStyleProps>`
  display: flex;

  ${({
    flexDirection = "column",
    m,
    mt,
    mb,
    ml,
    mr,
    my,
    mx,
    p,
    pt,
    pb,
    pl,
    pr,
    px,
    py,
    width,
    height,
    maxHeight,
    maxWidth,
    gap,
    alignItems = "stretch",
    justifyContent = "flex-start",
    flexWrap = "nowrap",
    alignSelf = "auto",
    backgroundColor = "transparent",
    borderRadius = 0,
    cursorPointer = false,
  }) => css`
    flex-direction: ${flexDirection};
    gap: ${calcSpace(gap)};

    margin-top: ${calcSpace(mt || my || m)};
    margin-bottom: ${calcSpace(mb || my || m)};
    margin-left: ${calcSpace(ml || mx || m)};
    margin-right: ${calcSpace(mr || mx || m)};

    padding-top: ${calcSpace(pt || py || p)};
    padding-bottom: ${calcSpace(pb || py || p)};
    padding-left: ${calcSpace(pl || px || p)};
    padding-right: ${calcSpace(pr || px || p)};

    border-radius: ${calcSpace(borderRadius)};

    max-width: ${maxWidth};
    max-height: ${maxHeight};
    width: ${width};
    height: ${height};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    flex-wrap: ${flexWrap};
    align-self: ${alignSelf};

    background-color: ${backgroundColor};
    cursor: ${cursorPointer ? "pointer" : "default"};
  `}
`;
