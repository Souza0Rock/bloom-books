import React from "react";
import Stack from "../Stack";

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
      <input
        type="text"
        placeholder="Pesquise aqui..."
        value={value}
        onChange={onChange}
        onKeyDown={(e: any) => {
          if (e.code === "Enter" && handleEnter) {
            handleEnter(e.target.value);
          }
        }}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "1rem",
          border: "none",
          outline: "none",
          backgroundColor: "transparent",
        }}
      />
    </Stack>
  );
};

export default InputText;
