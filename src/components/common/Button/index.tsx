import React, { MouseEvent } from "react";
import { Container } from "./Button.styled";
import { IStyleProps } from "@/types/styles";

interface IButtonProps extends Partial<IStyleProps> {
  children: React.ReactNode;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  width?: string;
  maxWidth?: string;
  backgroundColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  disabled = false,
  p,
  px = 0.75,
  py = 0.5,
  className,
  width = "auto",
  maxWidth = "none",
  backgroundColor = "#5062f0",
}) => {
  return (
    <Container
      p={p}
      px={px}
      py={py}
      className={className}
      disabled={disabled}
      onClick={(e) => onClick(e)}
      width={width}
      maxWidth={maxWidth}
      backgroundColor={backgroundColor}
    >
      {children}
    </Container>
  );
};

export default Button;
