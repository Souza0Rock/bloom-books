"use client";

import React, { ReactNode } from "react";
import { Container } from "./stack.styled";
import { IStyleProps } from "@/types/styles";

interface StackProps extends IStyleProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Stack: React.FC<StackProps> = (props) => {
  const { className } = props

  // console.log(className, "className")
  return <Container className={className} {...props} />;
};

export default Stack;
