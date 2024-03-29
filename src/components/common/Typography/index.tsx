import React from "react";
import { Text } from "./Typograph.styled";
import { TStyles } from "./types";
import { Roboto } from "next/font/google";

const inter = Roboto({
  subsets: ["latin"],
  weight: "400",
});

type TProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Typography: React.FC<TProps & TStyles> = ({
  children,
  fontSize = 14,
  textTransform = "none",
  fontWeight = 400,
  color = "#000",
  lineHeigth = "normal",
  italic = false,
  ...rest
}) => {
  return (
    <Text
      className={inter.className}
      fontSize={fontSize}
      textTransform={textTransform}
      fontWeight={fontWeight}
      color={color}
      cursorPointer={rest.onClick ? true : false}
      lineHeigth={lineHeigth}
      italic={italic}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
