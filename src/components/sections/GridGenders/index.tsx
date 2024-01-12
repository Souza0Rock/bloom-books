"use client";

import React, { useEffect, useState } from "react";
import Typography from "@/components/common/Typography";
import { getBooksGenders } from "@/services/fetch/getBooksGenders";
import Stack from "@/components/common/Stack";
import GenderCard from "@/components/common/GenderCard";
import { useSearchParams } from "next/navigation";
import { IGendersBooks, TGender } from "@/types/bookGenders";
// import { useGridOrientation } from "@/hooks/useGridOrientation";
import { usePagination } from "@/contexts/Pagination";
import { useGridOrientation } from "@/contexts/GridOrientation";

const GridGenders: React.FC<{ data: IGendersBooks }> = ({ data }) => {
  const { itemsPerPage } = usePagination();
  const { get } = useSearchParams();
  const { gridOrientation } = useGridOrientation();

  const search = get("search") || "";
  const page = Number(get("page")) || 1;
  // const itemsPerPage = Number(get("itemsPerPage")) || 10;

  const resultsFiltered = data.results.filter((i: TGender) =>
    i.display_name.toLowerCase().includes(search.toLowerCase())
  );

  const teste = search ? resultsFiltered : data.results;

  function paginate(
    array: string | any[],
    pageSize: number,
    pageNumber: number
  ) {
    --pageNumber; // ajustar para base 0
    return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize);
  }

  const [abacaxi, setAbacaxi] = useState(teste);

  useEffect(() => {
    console.log(itemsPerPage, "itemsPerPage");
    const currentPage = paginate(abacaxi, itemsPerPage, page);

    setAbacaxi(currentPage);
  }, [search, page, itemsPerPage]);

  return (
    <Stack
      gap={gridOrientation === "rows" ? 3 : 1.75}
      mt={gridOrientation === "rows" ? 1.5 : 2.625}
      px={7.5}
    >
      {abacaxi.map((i, index) => (
        <GenderCard data={i} key={index} />
      ))}
    </Stack>
  );
};

export default GridGenders;
