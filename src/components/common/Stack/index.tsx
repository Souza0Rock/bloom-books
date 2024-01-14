import React, { ReactNode } from "react";
import { Container } from "./stack.styled";
import { IStyleProps } from "@/types/styles";

interface StackProps extends IStyleProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const Stack: React.FC<StackProps> = (props) => {
  const { className, ref } = props;

  return <Container className={className} ref={ref} {...props} />;
};

export default Stack;
