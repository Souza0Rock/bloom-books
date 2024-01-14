import React, { useCallback, useEffect, useState } from "react";
import Stack from "@/components/common/Stack";
import { getBooks } from "@/services/fetch/getBooks";
import { usePathname, useSearchParams } from "next/navigation";
import BookCard from "@/components/common/BookCard";
import { useGridOrientation } from "@/contexts/GridOrientation";
import usePagination from "@/hooks/usePagination";
import Pagination from "@/components/common/Pagination";
import { useGenderStorage } from "@/contexts/GenderStorage";
import Typography from "@/components/common/Typography";

const GridBooks: React.FC = () => {
  const { get } = useSearchParams();
  const { gridOrientation } = useGridOrientation();
  const { handleChangeGenderName } = useGenderStorage();

  const pathname = usePathname().slice(1);

  const [books, setBooks] = useState<any>();

  const fetchBooks = useCallback(async () => {
    try {
      const data = await getBooks(pathname);
      setBooks(data.books);
      handleChangeGenderName(data.display_name);
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, []);

  const searchParam = get("search") || "";

  const filteredArray =
    books &&
    books.filter((book: TBook) =>
      book.title.toLowerCase().includes(searchParam.toLowerCase())
    );

  const { data, meta, handleChangeCurrentPage } = usePagination({
    data: filteredArray || [],
  });

  return (
    <Stack gap={1.5}>
      <Stack
        flexWrap="wrap"
        gap={gridOrientation === "blocks" ? 1.25 : 2.25}
        justifyContent={gridOrientation === "blocks" ? "center" : "flex-start"}
        flexDirection={gridOrientation === "blocks" ? "row" : "column"}
      >
        {data.length > 0 ? (
          data.map((book: TBook, index) => <BookCard key={index} data={book} />)
        ) : (
          <Typography fontSize={24}>
            Desculpe, sem livros disponíveis no momento!
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
    </Stack>
  );
};

export default GridBooks;
