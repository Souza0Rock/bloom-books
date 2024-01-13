"use client";

import React from "react";
import Stack from "@/components/common/Stack";
import GenderCard from "@/components/common/GenderCard";
import { TGender } from "@/types/bookGenders";
import { useGridOrientation } from "@/contexts/GridOrientation";
import Pagination from "@/components/common/Pagination";
import usePagination from "@/hooks/usePagination";
import { useSearchParams } from "next/navigation";

const GridGenders: React.FC<{ dataGenders: TGender[] }> = ({ dataGenders }) => {
  const { get } = useSearchParams();

  const searchParam = get("search") || "";

  const filteredArray = dataGenders.filter((gender) =>
    gender.display_name.toLowerCase().includes(searchParam.toLowerCase())
  );

  const { data, meta, handleChangeCurrentPage } = usePagination({
    data: filteredArray,
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
