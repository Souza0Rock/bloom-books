"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import usePagination from "@/hooks/usePagination";
import Stack from "@/components/common/Stack";
import GenderCard from "@/components/common/GenderCard";
import { useGridOrientation } from "@/contexts/GridOrientation";
import Pagination from "@/components/common/Pagination";
import Typography from "@/components/common/Typography";
import { TGender } from "@/types/bookGenders";
import { Container } from "./GridGenders.styled";
import { getBooksGenders } from "@/services/fetch/getBooksGenders";

const GridGenders: React.FC = () => {
  const [dataGenders, setDataGenders] = useState<TGender[] | []>([]);

  const fetchGenders = useCallback(async () => {
    try {
      const { results } = await getBooksGenders();
      setDataGenders(results);
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    fetchGenders();
  }, []);

  const { get } = useSearchParams();
  const { gridOrientation } = useGridOrientation();

  const searchParam = get("search") || "";

  const filteredArray = dataGenders.filter((gender) =>
    gender.display_name.toLowerCase().includes(searchParam.toLowerCase())
  );

  const { data, meta, handleChangeCurrentPage } = usePagination({
    data: filteredArray,
  });

  return (
    <Container gridOrientation={gridOrientation}>
      <Stack
        gap={gridOrientation === "rows" ? 1.625 : 1.25}
        flexDirection={gridOrientation === "rows" ? "column" : "row"}
        flexWrap={gridOrientation === "rows" ? "nowrap" : "wrap"}
        mb={gridOrientation === "rows" ? 1.5 : 2.625}
        className="box-grid"
      >
        {data.length > 0 ? (
          data?.map((i, index) => {
            return <GenderCard data={i} key={index} />;
          })
        ) : (
          <Typography fontSize={24}>
            Desculpe, sem gêneros disponíveis no momento!
          </Typography>
        )}
      </Stack>

      {meta.totalPages > 1 && (
        <Pagination
          handleChangePage={handleChangeCurrentPage}
          currentPage={meta.currentPage}
          totalPages={meta.totalPages}
        />
      )}
    </Container>
  );
};

export default GridGenders;
