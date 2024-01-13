import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
  useEffect,
} from "react";

export type TPaginationValue = {
  page: number;
  handleChangePage: (e: number) => void;
  itemsPerPage: number;
  handleChangeItemsPerPage: (e: number) => void;
};

interface IPagination {
  children: ReactNode;
}

export const PaginationContext = createContext<TPaginationValue | null>(null);

export function PaginationProvider({ children }: IPagination) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const [page, setPage] = useState(1);
  const handleChangePage = (page: number) => {
    setPage(page);
    push(pathname + "?" + createQueryString("page", String(page)));
  };

  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handleChangeItemsPerPage = (items: number) => {
    setItemsPerPage(items);
    push(pathname + "?" + createQueryString("itemsPerPage", String(items)));
  };

  useEffect(() => {
    const itemsPerPageParam = Number(searchParams.get("itemsPerPage"));

    itemsPerPageParam &&
      itemsPerPageParam !== 0 &&
      setItemsPerPage(itemsPerPageParam);

    const pageParam = Number(searchParams.get("page"));

    // console.log(pageParam, "pageParam")

    pageParam !== 0 && setPage(pageParam);
  }, []);

  return (
    <PaginationContext.Provider
      value={{
        page,
        handleChangePage,
        itemsPerPage,
        handleChangeItemsPerPage,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error(
      "usePaginationContext must be used within an PaginationProvider"
    );
  }
  return context;
}
