"use client";

import React from "react";
import Stack from "../Stack";
import Typography from "../Typography";
import { TGender } from "@/types/bookGenders";
import TextLink from "../TextLink";
import { formatDate } from "@/utils/formatDate";
import { useGridOrientation } from "@/contexts/GridOrientation";
import useWindowWidht from "@/hooks/useWindowWidht";
import { ContainerRowMode } from "./GenderCard.styled";

const GenderCard: React.FC<{ data: TGender }> = ({ data }) => {
  const { widthScreen } = useWindowWidht();
  const { gridOrientation } = useGridOrientation();

  // console.log(widthScreen, "widthScreen aaaa")

  return gridOrientation === "rows" ? (
    <ContainerRowMode justifyContent="space-between" gap={0.5}>
      <Stack
        flexWrap="wrap"
        gap={widthScreen > 1199 ? 0.75 : 0.25}
        flexDirection={widthScreen > 1199 ? "row" : "column"}
        alignItems={widthScreen > 1199 ? "center" : "stretch"}
      >
        <TextLink href={data.list_name_encoded}>{data.display_name}</TextLink>
        <Typography fontSize={10} italic color="#9296AC">
          Atuaizado {data.updated === "WEEKLY" ? "semanalmente" : "mensalmente"}
        </Typography>
      </Stack>
      <Stack
        flexDirection={widthScreen > 1199 ? "row" : "column"}
        gap={widthScreen > 1199 ? 5.875 : 0.25}
      >
        <Typography fontSize={12} color="#454A67">
          Última publicação:{" "}
          {formatDate(data.newest_published_date, "DD/MM/YYYY")}
        </Typography>
        <Typography fontSize={12} color="#454A67">
          Publicação mais antiga:{" "}
          {formatDate(data.oldest_published_date, "DD/MM/YYYY")}
        </Typography>
      </Stack>
    </ContainerRowMode>
  ) : (
    <Stack
      flexDirection="column"
      justifyContent="space-between"
      gap={0.5}
      width="46.9%"
      maxWidth="186px"
    >
      <Stack flexDirection="column" gap={0.25} flexWrap="wrap">
        <TextLink href={data.list_name_encoded}>{data.display_name}</TextLink>
        <Typography fontSize={10} italic color="#9296AC">
          Atuaizado {data.updated === "WEEKLY" ? "semanalmente" : "mensalmente"}
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
