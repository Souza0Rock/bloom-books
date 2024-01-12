import React from "react";
import Stack from "../Stack";

// import { Container } from './styles';

const InputText: React.FC<{
  icon?: React.ReactNode;
  width?: string;
}> = ({ icon, width = "auto" }) => {
  return (
    // <form
    //   // onSubmit={handleSearch}
    //   style={{ display: "flex", justifyContent: "center", margin: "20px" }}
    // >
    <Stack
      borderRadius={1}
      backgroundColor="#fff"
      pl={1}
      flexDirection="row"
      alignItems="center"
      width={width}
    >
      {icon}
      <input
        type="text"
        placeholder="Pesquise aqui..."
        // value={searchQuery}
        // onChange={(e) => setSearchQuery(e.target.value)}
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
    // </form>
  );
};

export default InputText;
