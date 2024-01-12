"use client"

import { useState } from "react";

export const useGridOrientation = (): {
  gridOrientation: string | false;
  handleGridOrientation: (orientation: "rows" | "blocks") => void;
} => {
  const [gridOrientation, setGridOrientation] = useState(() => {
    const storedOrientation =
      (typeof window !== "undefined" &&
        window.localStorage.getItem("grid_orientation")) ||
      "rows";

    return typeof window !== "undefined" && storedOrientation;
  });

  const handleGridOrientation = (orientation: "rows" | "blocks") => {
    (typeof window !== "undefined" &&
      window.localStorage.setItem("grid_orientation", orientation)) ||
      "rows";

    setGridOrientation(orientation);
  };

  return {
    gridOrientation,
    handleGridOrientation,
  };
};
