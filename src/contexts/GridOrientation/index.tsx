import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type TGridOrientation = "rows" | "blocks";

export type TGridOrientationValue = {
  gridOrientation: "rows" | "blocks";
  handleGridOrientation: (orientation: TGridOrientation) => void;
};

interface IGridOrientation {
  children: ReactNode;
}

export const GridOrientationContext =
  createContext<TGridOrientationValue | null>(null);

export function GridOrientationProvider({ children }: IGridOrientation) {
  const [gridOrientation, setGridOrientation] = useState<TGridOrientation>(
    "rows"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedOrientation: any =
        window.localStorage.getItem("grid_orientation") || "rows";
      setGridOrientation(storedOrientation);
    }
  }, []);

  const handleGridOrientation = (orientation: TGridOrientation) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("grid_orientation", orientation);
    }

    setGridOrientation(orientation);
  };

  return (
    <GridOrientationContext.Provider
      value={{
        gridOrientation,
        handleGridOrientation,
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
