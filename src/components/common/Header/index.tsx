"use client";

import React, { useState } from "react";
import useCreateQuery from "@/hooks/useCreateQuery";
import { useRouter } from "next/navigation";
import Stack from "../Stack";
import Typography from "../Typography";
import Star from "../../../../public/icons/star";
import InputText from "../InputText";
import Search from "../../../../public/icons/search";

const Header: React.FC = () => {
  const { push } = useRouter();

  const { createQuery } = useCreateQuery();

  const [searchInput, setSearchInput] = useState("");

  return (
    <Stack
      px={0.75}
      py={1}
      gap={1}
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      backgroundColor="#5062f0"
    >
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
            p={0.375}
            ml={-0.75}
            cursorPointer
            onClick={() => createQuery("search", searchInput)}
          >
            <Search />
          </Stack>
        }
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        handleEnter={(e) => createQuery("search", e)}
      />
    </Stack>
  );
};

export default Header;
