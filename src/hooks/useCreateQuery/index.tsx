import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const useCreateQuery = (): {
  createQuery: (name: string, value: string) => void;
} => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const assembleQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const createQuery = (name: string, value: string) => {
    push(pathname + "?" + assembleQueryString(name, value));
  };

  return { createQuery };
};

export default useCreateQuery;
