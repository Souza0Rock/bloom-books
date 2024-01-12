"use client";

import React from "react";
import { Container } from "./Header.styled";
import Typography from "../Typography";
import Stack from "../Stack";
import Star from "../../../../public/icons/star";
import InputText from "../InputText";
import Search from "../../../../public/icons/search";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const { push } = useRouter();

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
      <InputText icon={<Search />} width="100%" />
    </Container>
  );
};

export default Header;
