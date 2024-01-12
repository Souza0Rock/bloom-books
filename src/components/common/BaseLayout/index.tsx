"use client";

import React from "react";
import * as S from "./BaseLayout.styled";
import Header from "../Header";
import SubHeader from "../SubHeader";

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
    <>
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
    </>
  );
};

export default BaseLayout;
