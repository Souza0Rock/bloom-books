import React, { createContext, useContext, useEffect, useState } from "react";

type IProviderProps = {
  children: React.ReactNode;
};

interface IContextProps {
  widthScreen: number;
}

const WindowWidhtContext = createContext({} as IContextProps);

export function WindowWidhtProvider({ children }: IProviderProps) {
  const [widthScreen, setWidthScreen] = useState<number>(0);

  //@ts-ignore
  useEffect(() => {
    function handleResize() {
      setWidthScreen(
        typeof window !== "undefined" && window.innerWidth
          ? window.innerWidth
          : 0
      );
    }
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);
    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowWidhtContext.Provider value={{ widthScreen }}>
      {children}
    </WindowWidhtContext.Provider>
  );
}

export function useWindowWidht() {
  return useContext(WindowWidhtContext);
}
