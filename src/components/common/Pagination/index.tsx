import React from "react";
import { ButtonPage } from "./Pagination.styled";
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
    <Stack flexDirection="row" justifyContent="center" gap={0.3} px={1}>
      <ButtonPage
        disabled={currentPage === 0}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        {"<"}
      </ButtonPage>
      <Stack flexDirection="row" flexWrap="wrap" gap={0.3}>
        {Array.from({ length: totalPages }).map((_, index) => {
          return (
            <ButtonPage
              key={index}
              selected={currentPage == index}
              onClick={() => handleChangePage(index)}
            >
              {index + 1}
            </ButtonPage>
          );
        })}
      </Stack>
      <ButtonPage
        disabled={currentPage + 1 === totalPages}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        {">"}
      </ButtonPage>
    </Stack>
  );
};

export default Pagination;
