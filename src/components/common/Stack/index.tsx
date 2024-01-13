"use client";

import React, { ReactNode } from "react";
import { Container, ContainerProps } from "./stack.styled";

interface StackProps extends ContainerProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Stack: React.FC<StackProps> = (props) => {
  const { className } = props

  console.log(className, "className")
  return <Container className={className} {...props} />;
};

export default Stack;
