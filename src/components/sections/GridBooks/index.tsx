import React, { useCallback, useEffect, useState } from "react";
import Stack from "@/components/common/Stack";
import { getBooks } from "@/services/fetch/getBooks";
import { usePathname, useSearchParams } from "next/navigation";
import BookCard from "@/components/common/BookCard";
import { useGridOrientation } from "@/contexts/GridOrientation";

const GridBooks: React.FC = () => {
  const { get } = useSearchParams();
  const { gridOrientation } = useGridOrientation();

  const pathname = usePathname().slice(1);

  const [books, setBooks] = useState<any>();

  const fetchBooks = useCallback(async () => {
    try {
      const data = await getBooks(pathname);
      setBooks(data.books);
      console.log(data, "data");
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

  // const {} = usePa

  return (
    <Stack
      flexWrap="wrap"
      gap={gridOrientation === "blocks" ? 1.25 : 2.25}
      justifyContent={gridOrientation === "blocks" ? "center" : "flex-start"}
      flexDirection={gridOrientation === "blocks" ? "row" : "column"}
    >
      {filteredArray && filteredArray.map((book: TBook) => <BookCard data={book} />)}
    </Stack>
  );
};

export default GridBooks;
