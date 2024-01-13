"use client";

import React from "react";
import { Container } from "./BaseLayout.styled";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { GridOrientationProvider } from "@/contexts/GridOrientation";
import Stack from "../Stack";

export type TProps = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<TProps> = ({ children }) => (
  <GridOrientationProvider>
    <Container>
      <Header />
      <SubHeader />
      <Stack m={1} minHeight="100vh" className="children-content">
        {children}
      </Stack>
    </Container>
  </GridOrientationProvider>
);

export default BaseLayout;
