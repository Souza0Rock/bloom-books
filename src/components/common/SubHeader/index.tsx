"use client";

import React, { useEffect } from "react";
import Typography from "../Typography";
import Stack from "../Stack";
import Select from "../Select";
import GridRows from "../../../../public/icons/gridRows";
import GridBlock from "../../../../public/icons/gridBlock";
import { useGridOrientation } from "@/hooks/useGridOrientation";
// import { useRouter } from "next/router";

const SubHeader: React.FC = () => {
  // const { route } = useRouter();

  const validateRoute = () => {
    // if (route === "/quem-somos")
    //   return {
    //     crumb: "Quem Somos",
    //     complementText: "A maior rede de tratamento pokémon.",
    //   };
    // else
    return {
      crumb: "Agendar Consulta",
      complementText: "Recupere seus pokémons em 5 segundos",
    };
  };

  const { complementText, crumb } = validateRoute();

  const { gridOrientation, handleGridOrientation } = useGridOrientation();
  console.log(gridOrientation, "gridOrientarion");

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

      <Stack flexDirection="row" alignItems="center" gap={0.5}>
        <Typography fontSize={12} lineHeigth={1}>
          Exibir
        </Typography>
        <Select />
        <Typography fontSize={12} lineHeigth={1}>
          por vez
        </Typography>
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
  );
};

export default SubHeader;
