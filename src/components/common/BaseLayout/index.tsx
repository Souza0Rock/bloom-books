"use client";

import React from "react";
import * as S from "./BaseLayout.styled";
import Header from "../Header";
import SubHeader from "../SubHeader";
import { GridOrientationProvider } from "@/contexts/GridOrientation";
import Stack from "../Stack";
import useWindowWidht from "@/hooks/useWindowWidht";

export type TProps = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<TProps> = ({ children }) => {
  const { widthScreen } = useWindowWidht();

  return (
    <GridOrientationProvider>
      <S.Container>
        <Header />
        <SubHeader />
        <Stack m={widthScreen < 768 ? 1 : 7.5} mt={widthScreen < 768 ? 0 : 1.5}>
          {children}
        </Stack>
      </S.Container>
    </GridOrientationProvider>
  );
};

export default BaseLayout;
