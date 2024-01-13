"use client";

import React from "react";
import Stack from "../Stack";
import Typography from "../Typography";
import { TGender } from "@/types/bookGenders";
import TextLink from "../TextLink";
import { formatDate } from "@/utils/formatDate";
import { useGridOrientation } from "@/contexts/GridOrientation";
import { useWindowWidht } from "@/contexts/WindowWidht";

const GenderCard: React.FC<{ data: TGender }> = ({ data }) => {
  const { gridOrientation } = useGridOrientation();
  const { widthScreen } = useWindowWidht()

  return gridOrientation === "rows" ? (
    <Stack flexDirection="column" justifyContent="space-between" gap={0.5}>
      <Stack flexDirection="column" gap={0.25} flexWrap="wrap">
        <TextLink href={data.list_name_encoded}>{data.display_name}</TextLink>
        <Typography fontSize={10} italic color="#9296AC">
          Atuaizada em {data.updated}
        </Typography>
      </Stack>
      <Stack flexDirection="column" gap={0.25}>
        <Typography fontSize={12} color="#454A67">
          Última publicação:{" "}
          {formatDate(data.newest_published_date, "DD/MM/YYYY")}
        </Typography>
        <Typography fontSize={12} color="#454A67">
          Publicação mais antiga:{" "}
          {formatDate(data.oldest_published_date, "DD/MM/YYYY")}
        </Typography>
      </Stack>
    </Stack>
  ) : (
    // <Stack flexDirection="row" justifyContent="space-between" gap={0.75}>
    //   <Stack flexDirection="row" alignItems="center" gap={0.75} flexWrap="wrap">
    //     <TextLink href={data.list_name_encoded}>{data.display_name}</TextLink>
    //     <Typography fontSize={10} italic color="#9296AC">
    //       Atuaizada em {data.updated}
    //     </Typography>
    //   </Stack>
    //   <Stack flexDirection="row" alignItems="center" gap={5.875}>
    //     <Typography fontSize={12} color="#454A67">
    //       Última publicação:{" "}
    //       {formatDate(data.newest_published_date, "DD/MM/YYYY")}
    //     </Typography>
    //     <Typography fontSize={12} color="#454A67">
    //       Publicação mais antiga:{" "}
    //       {formatDate(data.oldest_published_date, "DD/MM/YYYY")}
    //     </Typography>
    //   </Stack>
    // </Stack>
    <Stack
      flexDirection="column"
      justifyContent="space-between"
      gap={0.5}
      width="46.9%"
    >
      <Stack flexDirection="column" gap={0.25} flexWrap="wrap">
        <TextLink href={data.list_name_encoded}>{data.display_name}</TextLink>
        <Typography fontSize={10} italic color="#9296AC">
          Atuaizada em {data.updated}
        </Typography>
      </Stack>
      <Stack flexDirection="column" gap={0.25}>
        <Typography fontSize={12} color="#454A67">
          Última publicação:{" "}
          {formatDate(data.newest_published_date, "DD/MM/YYYY")}
        </Typography>
        <Typography fontSize={12} color="#454A67">
          Publicação mais antiga:{" "}
          {formatDate(data.oldest_published_date, "DD/MM/YYYY")}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default GenderCard;
