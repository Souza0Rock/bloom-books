"use client";

import React from "react";
import Typography from "../Typography";
import Stack from "../Stack";
import Select from "../Select";
import GridRows from "../../../../public/icons/gridRows";
import GridBlock from "../../../../public/icons/gridBlock";
import { useGridOrientation } from "@/contexts/GridOrientation";
import { useSearchParams } from "next/navigation";
import { Container } from "./SubHeader.styled";
import useCreateQuery from "@/hooks/useCreateQuery";

const SubHeader: React.FC = () => {
  const { gridOrientation, handleGridOrientation } = useGridOrientation();

  const options = [5, 10, 15];

  const { get } = useSearchParams();

  const itemsPerPageParam = get("itemsPerPage");

  const { createQuery } = useCreateQuery();

  return (
    <Container
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

      <Stack
        flexDirection="row"
        alignItems="center"
        className="box-controls-grid"
        gap={0.5}
      >
        <Stack flexDirection="row" gap={0.25}>
          <Typography fontSize={12} lineHeigth={1}>
            Exibir
          </Typography>
          <Select
            options={options}
            value={itemsPerPageParam}
            onChange={(e) => createQuery("itemsPerPage", e)}
          />
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
    </Container>
  );
};

export default SubHeader;
