import React from "react";
import { ButtonPagination, ContainerPagination } from "./Pagination.styled";
import Stack from "../Stack";

const Pagination = ({
  totalPages,
  currentPage,
  handleChangePage,
}: {
  totalPages: number;
  currentPage: number;
  handleChangePage: any;
}) => {
  return (
    // <Stack flexDirection="row" flexWrap="wrap" justifyContent="center" gap={0.5}>
    <Stack
      flexDirection="row"
      // flexWrap="wrap"
      justifyContent="center"
      gap={0.3}
      px={1}
      // mt={1.5}
    >
      <ButtonPagination
        onClick={() => {
          currentPage !== 0 && handleChangePage(currentPage - 1);
        }}
      >
        {"<"}
      </ButtonPagination>
      <Stack flexDirection="row" flexWrap="wrap" gap={0.3}>
        {Array.from({ length: totalPages }).map((_, index) => {
          return (
            <ButtonPagination
              page={currentPage == index}
              value={index}
              onClick={(e) => handleChangePage(e.target.value)}
              key={index}
            >
              {index + 1}
            </ButtonPagination>
          );
        })}
      </Stack>
      <ButtonPagination
        onClick={() => {
          currentPage + 1 !== totalPages && handleChangePage(currentPage + 1);
        }}
      >
        {">"}
      </ButtonPagination>
    </Stack>
  );
};

export default Pagination;
