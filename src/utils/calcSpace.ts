export const calcSpace = (space?: number | string): string | number => {
  if (!space) {
    return 0;
  }

  if (typeof space === "number") {
    return `${space * 8}px`;
  }

  if (space === "auto") {
    return `auto`;
  }

  return space;
};