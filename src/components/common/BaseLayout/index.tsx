"use client";

import React from "react";
import { GridOrientationProvider } from "@/contexts/GridOrientation";
import { GenderStorageProvider } from "@/contexts/GenderStorage";
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
      <Container>
        <Header />
        <SubHeader />
        <Stack m={1} minHeight="100vh" className="children-content">
          {children}
        </Stack>
      </Container>
    </GenderStorageProvider>
  </GridOrientationProvider>
);

export default BaseLayout;
