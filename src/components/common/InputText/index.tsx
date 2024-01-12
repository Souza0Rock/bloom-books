import React, { KeyboardEventHandler } from "react";
import Stack from "../Stack";

const InputText: React.FC<{
  icon?: React.ReactNode;
  width?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  handleEnter?: (e: string) => void;
}> = ({ icon, width = "auto", value, onChange, handleEnter }) => {
  return (
    <Stack
      pl={1}
      width={width}
      borderRadius={1}
      alignItems="center"
      flexDirection="row"
      backgroundColor="#fff"
    >
      {icon}
      <input
        type="text"
        placeholder="Pesquise aqui..."
        value={value}
        onChange={onChange}
        onKeyDown={(e: any) => {
          // console.log(e, "eee")
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
