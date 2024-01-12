"use client";

import React from "react";
import * as S from "./BaseLayout.styled";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { PaginationProvider } from "@/contexts/Pagination";
import { GridOrientationProvider } from "@/contexts/GridOrientation";

export type TProps = {
  children: React.ReactNode;
  backgroundImage?: string;
  centerChildVertically?: boolean;
};

const BaseLayout: React.FC<TProps> = ({
  children,
  backgroundImage,
  centerChildVertically,
}) => {
  return (
    <PaginationProvider>
      <GridOrientationProvider>
        <S.Container>
          <Header />
          <SubHeader />
          <S.ChildrenContent
            centerChildVertically={centerChildVertically}
            backgroundImage={backgroundImage}
          >
            {children}
          </S.ChildrenContent>
        </S.Container>
      </GridOrientationProvider>
    </PaginationProvider>
  );
};

export default BaseLayout;
