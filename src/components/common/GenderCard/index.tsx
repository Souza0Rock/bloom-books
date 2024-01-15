"use client";

import React from "react";
import Stack from "../Stack";
import Typography from "../Typography";
import TextLink from "../TextLink";
import { ContainerRowMode } from "./GenderCard.styled";
import { useGridOrientation } from "@/contexts/GridOrientation";
import { formatDate } from "@/utils/formatDate";
import { TGender } from "@/types/gendersBooks";

const GenderCard: React.FC<{ data: TGender }> = ({ data }) => {
  const { gridOrientation } = useGridOrientation();

  return gridOrientation === "rows" ? (
    <ContainerRowMode justifyContent="space-between" gap={0.5}>
      <Stack
        gap={0.25}
        flexWrap="wrap"
        className="box-link"
        alignItems="stretch"
        flexDirection="column"
      >
        <TextLink href={data.list_name_encoded}>{data.display_name}</TextLink>
        <Typography fontSize={10} italic color="#9296AC">
          Atuaizado {data.updated === "WEEKLY" ? "semanalmente" : "mensalmente"}
        </Typography>
      </Stack>
      <Stack className="box-updates" flexDirection={"column"} gap={0.25}>
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
