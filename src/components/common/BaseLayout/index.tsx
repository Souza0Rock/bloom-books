"use client";

import React from "react";
import { GridOrientationProvider } from "@/contexts/GridOrientation";
import { GenderStorageProvider } from "@/contexts/GenderStorage";
import { FavoriteBooksProvider } from "@/contexts/FavoritesBooks";
import { Container } from "./BaseLayout.styled";
import SubHeader from "../SubHeader";
import Header from "../Header";
import Stack from "../Stack";

export type TProps = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<TProps> = ({ children }) => (
  <GridOrientationProvider>
    <GenderStorageProvider>
      <FavoriteBooksProvider>
        <Container>
          <Header />
          <SubHeader />
          <Stack m={1} minHeight="100vh" className="children-content">
            {children}
          </Stack>
        </Container>
      </FavoriteBooksProvider>
    </GenderStorageProvider>
  </GridOrientationProvider>
);

export default BaseLayout;
