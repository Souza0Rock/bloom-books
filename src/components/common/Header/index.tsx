"use client";

import React, { useCallback, useState } from "react";
import { Container } from "./Header.styled";
import Typography from "../Typography";
import Stack from "../Stack";
import Star from "../../../../public/icons/star";
import InputText from "../InputText";
import Search from "../../../../public/icons/search";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Header: React.FC = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchInput, setSearchInput] = useState("");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const teste = (e: string) => {
    push(pathname + "?" + createQueryString("search", e));
  };

  return (
    <Container>
      <Stack
        width="100%"
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography
          fontWeight={700}
          fontSize={24}
          color="#fff"
          onClick={() => push("/")}
        >
          Bloom Books
        </Typography>
        <Star />
      </Stack>
      <InputText
        width="100%"
        icon={
          <Stack
            px={0.375}
            ml={-0.75}
            cursorPointer
            onClick={() => teste(searchInput)}
          >
            <Search />
          </Stack>
        }
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        handleEnter={(e) => teste(e)}
      />
    </Container>
  );
};

export default Header;
