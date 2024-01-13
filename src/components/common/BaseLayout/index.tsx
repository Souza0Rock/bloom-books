"use client";

import React from "react";
import * as S from "./BaseLayout.styled";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { PaginationProvider } from "@/contexts/Pagination";
import { GridOrientationProvider } from "@/contexts/GridOrientation";
import { WindowWidhtProvider } from "@/contexts/WindowWidht";
import Stack from "../Stack";

export type TProps = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<TProps> = ({ children }) => {
  return (
    <PaginationProvider>
      <GridOrientationProvider>
        <WindowWidhtProvider>
          <S.Container>
            <Header />
            <SubHeader />
            <S.ChildrenContent>{children}</S.ChildrenContent>
          </S.Container>
        </WindowWidhtProvider>
      </GridOrientationProvider>
    </PaginationProvider>
  );
};

export default BaseLayout;
