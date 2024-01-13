import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const usePagination = ({
  data,
}: {
  data: any[];
}): {
  handleChangeCurrentPage: (page: number) => void;
  handleChangeItemsPerPage: (qtd: number) => void;
  data: any[];
  meta: {
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
  };
} => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pageParam = searchParams.get("page") || 0;
  const itemsPerPageParam = searchParams.get("itemsPerPage") || 5;

  useEffect(() => {
    setCurrentPage(Number(pageParam) - 1);
    setItemsPerPage(Number(itemsPerPageParam));
  }, [pageParam, itemsPerPageParam]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const [currentPage, setCurrentPage] = useState(Number(pageParam) || 0);

  const handleChangeCurrentPage = (e: string | number) => {
    setCurrentPage(Number(e));

    push(pathname + "?" + createQueryString("page", String(Number(e) + 1)));
  };

  const [itemsPerPage, setItemsPerPage] = useState(
    Number(itemsPerPageParam) || 5
  );

  const handleChangeItemsPerPage = (e: string | number) => {
    setItemsPerPage(Number(e));

    push(pathname + "?" + createQueryString("itemsPerPage", String(e)));
  };

  const totalPages = data && Math.ceil(data?.length / itemsPerPage);
  const firstIndex = currentPage * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;
  const paginatedItems = data.slice(firstIndex, lastIndex);

  const searchParam = searchParams.get("search");

  useEffect(() => {
    handleChangeCurrentPage(0);
  }, [itemsPerPageParam, searchParam]);

  return {
    handleChangeCurrentPage,
    handleChangeItemsPerPage,
    data: paginatedItems,
    meta: {
      currentPage,
      itemsPerPage,
      totalPages,
    },
  };
};

export default usePagination;
