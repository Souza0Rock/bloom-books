"use client";

import React from "react";
import * as S from "./BaseLayout.styled";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { PaginationProvider } from "@/contexts/Pagination";
import { GridOrientationProvider } from "@/contexts/GridOrientation";
import { WindowWidhtProvider, useWindowWidht } from "@/contexts/WindowWidht";
import Stack from "../Stack";

export type TProps = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<TProps> = ({ children }) => {
  const { widthScreen } = useWindowWidht();

  return (
    <PaginationProvider>
      <GridOrientationProvider>
        <WindowWidhtProvider>
          <S.Container>
            <Header />
            <SubHeader />
            <Stack
              m={widthScreen < 768 ? 1 : 7.5}
              mt={widthScreen < 768 ? 0 : 1.5}
            >
              {children}
            </Stack>
          </S.Container>
        </WindowWidhtProvider>
      </GridOrientationProvider>
    </PaginationProvider>
  );
};

export default BaseLayout;
