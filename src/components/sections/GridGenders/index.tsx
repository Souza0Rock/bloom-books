"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import usePagination from "@/hooks/usePagination";
import Stack from "@/components/common/Stack";
import GenderCard from "@/components/common/GenderCard";
import { useGridOrientation } from "@/contexts/GridOrientation";
import Pagination from "@/components/common/Pagination";
import { TGender } from "@/types/bookGenders";
import { useWindowWidht } from "@/contexts/WindowWidht";

const GridGenders: React.FC<{ dataGenders: TGender[] }> = ({ dataGenders }) => {
  const { get } = useSearchParams();
  const { gridOrientation } = useGridOrientation();
  // const { widthScreen } = useWindowWidht()
  
  const searchParam = get("search") || "";

  const filteredArray = dataGenders.filter((gender) =>
    gender.display_name.toLowerCase().includes(searchParam.toLowerCase())
  );

  const { data, meta, handleChangeCurrentPage } = usePagination({
    data: filteredArray,
  });

  // console.log(filteredArray, "filteredArray")

  return (
    <>
      <Stack
        gap={gridOrientation === "rows" ? 1.625 : 1.25}
        flexDirection={gridOrientation === "rows" ? "column" : "row"}
        flexWrap={gridOrientation === "rows" ? "nowrap" : "wrap"}
      >
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
