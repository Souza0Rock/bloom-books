import React, { createContext, useContext, useState, ReactNode } from "react";

export type TGenderStorageValue = {
  genderName: string;
  handleChangeGenderName: (name: string) => void;
};

interface IGridOrientation {
  children: ReactNode;
}

export const GenderStorageContext = createContext<TGenderStorageValue | null>(
  null
);

export function GenderStorageProvider({ children }: IGridOrientation) {
  const [genderName, setGenderName] = useState("");
  const handleChangeGenderName = (name: string) => setGenderName(name);

  return (
    <GenderStorageContext.Provider
      value={{
        genderName,
        handleChangeGenderName,
      }}
    >
      {children}
    </GenderStorageContext.Provider>
  );
}

export function useGenderStorage() {
  const context = useContext(GenderStorageContext);

  if (!context) {
    throw new Error(
      "useGenderStorageContext must be used within an GenderStorageProvider"
    );
  }
  return context;
}
