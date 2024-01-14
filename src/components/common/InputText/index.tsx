import React from "react";
import Stack from "../Stack";
import { InputStyled } from "./InputSelect.styled";

const InputText: React.FC<{
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleEnter?: (e: string) => void;
  className?: string;
  width?: string;
  icon?: React.ReactNode;
}> = ({
  value,
  onChange,
  handleEnter,
  className = "",
  width = "auto",
  icon,
}) => {
  return (
    <Stack
      pl={1}
      width={width}
      borderRadius={1}
      alignItems="center"
      flexDirection="row"
      backgroundColor="#fff"
      className={className}
    >
      {icon}
      <InputStyled
        type="text"
        placeholder="Pesquise aqui..."
        value={value}
        onChange={onChange}
        onKeyDown={(e: any) => {
          if (e.code === "Enter" && handleEnter) {
            handleEnter(e.target.value);
          }
        }}
      />
    </Stack>
  );
};

export default InputText;
