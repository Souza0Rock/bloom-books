"use client";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { GridOrientationProvider } from "@/contexts/GridOrientation";
import { GenderStorageProvider } from "@/contexts/GenderStorage";
import { FavoriteBooksProvider } from "@/contexts/FavoritesBooks";
import { Container } from "./BaseLayout.styled";
import SubHeader from "../SubHeader";
import Header from "../Header";
import Stack from "../Stack";
import SidebarBooksFavorites from "@/components/sections/SidebarBooksFavorites";
import { ToastContainer } from "react-toastify";

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
          <SidebarBooksFavorites />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Stack m={1} className="children-content">
            {children}
          </Stack>
        </Container>
      </FavoriteBooksProvider>
    </GenderStorageProvider>
  </GridOrientationProvider>
);

export default BaseLayout;
