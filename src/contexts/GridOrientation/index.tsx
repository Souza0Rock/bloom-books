import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type TGridOrientationValue = {
  gridOrientation: string | "rows" | "blocks" | false;
  handleGridOrientation: (orientation: "rows" | "blocks") => void
};

interface IGridOrientation {
  children: ReactNode;
}

export const GridOrientationContext = createContext<TGridOrientationValue | null>(null);

export function GridOrientationProvider({ children }: IGridOrientation) {
  const [gridOrientation, setGridOrientation] = useState<string | "rows" | "blocks" | false>("rows");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedOrientation = window.localStorage.getItem("grid_orientation") || "rows";
      setGridOrientation(storedOrientation);
    }
  }, []);

  const handleGridOrientation = (orientation: "rows" | "blocks") => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("grid_orientation", orientation);
    }

    setGridOrientation(orientation);
  };

  return (
    <GridOrientationContext.Provider
      value={{
        gridOrientation,
        handleGridOrientation
      }}
    >
      {children}
    </GridOrientationContext.Provider>
  );
}

export function useGridOrientation() {
  const context = useContext(GridOrientationContext);

  if (!context) {
    throw new Error(
      "useGridOrientationContext must be used within an GridOrientationProvider"
    );
  }
  return context;
}
