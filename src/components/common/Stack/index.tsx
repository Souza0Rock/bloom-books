"use client"

import React, { ReactNode } from "react";
import { Container, ContainerProps } from "./stack.styled";

interface StackProps extends ContainerProps {
  children: ReactNode;
  onClick?: () => void;
}

const Stack: React.FC<StackProps> = (props) => {
  return <Container {...props} />;
};

export default Stack;
