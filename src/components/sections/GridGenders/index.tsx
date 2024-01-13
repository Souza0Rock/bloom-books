"use client";

import React from "react";
import Stack from "@/components/common/Stack";
import GenderCard from "@/components/common/GenderCard";
import { IGendersBooks, TGender } from "@/types/bookGenders";
import { useGridOrientation } from "@/contexts/GridOrientation";
import Pagination from "@/components/common/Pagination";
import usePagination from "@/hooks/usePagination";

const GridGenders: React.FC<{ dataGenders: TGender[] }> = ({ dataGenders }) => {
  const { data, meta, handleChangeCurrentPage } = usePagination({
    data: dataGenders,
  });

  const { gridOrientation } = useGridOrientation();

  return (
    <>
      <Stack gap={gridOrientation === "rows" ? 3 : 1.75}>
        {data &&
          data?.map((i, index) => {
            return <GenderCard data={i} key={index} />;
          })}
      </Stack>

      <Pagination
        handleChangePage={handleChangeCurrentPage}
        currentPage={meta.currentPage}
        totalPages={meta.totalPages}
      />
    </>
  );
};

export default GridGenders;
