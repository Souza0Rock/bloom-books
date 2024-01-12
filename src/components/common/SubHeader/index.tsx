"use client";

import React, { useEffect, useState } from "react";
import Typography from "../Typography";
import Stack from "../Stack";
import Select from "../Select";
import GridRows from "../../../../public/icons/gridRows";
import GridBlock from "../../../../public/icons/gridBlock";
import { useGridOrientation } from "@/contexts/GridOrientation";

const SubHeader: React.FC = () => {
  const { gridOrientation, handleGridOrientation } = useGridOrientation();

  return (
    <Stack
      px={1}
      py={0.5}
      flexDirection="row"
      backgroundColor="#F2F3F8"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography fontSize={18} fontWeight={700} color="#010311">
        Gêneros
      </Typography>

      <Stack flexDirection="row" alignItems="center" gap={2.75}>
        <Stack flexDirection="row" gap={0.25}>
          <Typography fontSize={12} lineHeigth={1}>
            Exibir
          </Typography>
          <Select />
          <Typography fontSize={12} lineHeigth={1}>
            por vez
          </Typography>
        </Stack>
        <Stack flexDirection="row" gap={0.5}>
          <GridRows
            onClick={() => handleGridOrientation("rows")}
            color={gridOrientation === "rows" ? "#5062F0" : "#D0D3E2"}
          />
          <GridBlock
            onClick={() => handleGridOrientation("blocks")}
            color={gridOrientation === "blocks" ? "#5062F0" : "#D0D3E2"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SubHeader;
