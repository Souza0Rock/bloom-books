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
        disabled={currentPage === 0}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        {"<"}
      </ButtonPagination>
      <Stack flexDirection="row" flexWrap="wrap" gap={0.3}>
        {Array.from({ length: totalPages }).map((_, index) => {
          return (
            <ButtonPagination
              key={index}
              value={index}
              page={currentPage == index}
              onClick={(e: { target: { value: number } }) =>
                handleChangePage(e.target.value)
              }
            >
              {index + 1}
            </ButtonPagination>
          );
        })}
      </Stack>
      <ButtonPagination
        disabled={currentPage + 1 === totalPages}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        {">"}
      </ButtonPagination>
    </Stack>
  );
};

export default Pagination;
