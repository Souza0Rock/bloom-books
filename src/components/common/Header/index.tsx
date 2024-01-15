import React, { useEffect, useState } from "react";
import useCreateQuery from "@/hooks/useCreateQuery";
import { usePathname, useRouter } from "next/navigation";
import Stack from "../Stack";
import Typography from "../Typography";
import Star from "../../../../public/icons/star";
import InputText from "../InputText";
import Search from "../../../../public/icons/search";
import { Container } from "./Header.styled";
import { useFavoriteBooks } from "@/contexts/FavoritesBooks";

const Header: React.FC = () => {
  const { push } = useRouter();
  const { createQuery } = useCreateQuery();
  const { openSidebar, handleOpenSidebar } = useFavoriteBooks();

  const pathname = usePathname();

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setSearchInput("");
  }, [pathname]);

  return (
    <Container
      pl={1}
      pb={1}
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
        <InputText
          width="29.5%"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          handleEnter={(e) => createQuery("search", e)}
          className="input-desktop"
          icon={
            <Stack
              p={0.375}
              ml={-0.75}
              cursorPointer
              onClick={() => createQuery("search", searchInput)}
              className="icon-input"
              borderRadius={14}
            >
              <Search />
            </Stack>
          }
        />
        <Stack
          width="56px"
          height="45px"
          alignItems="center"
          justifyContent="center"
          onClick={handleOpenSidebar}
          backgroundColor={openSidebar ? "#0B1A8E" : "transparent"}
          className="star-favorited"
          cursorPointer
        >
          <Star />
        </Stack>
      </Stack>
      <Stack width="100%" pr={1}>
        <InputText
          width="100%"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          handleEnter={(e) => createQuery("search", e)}
          className="input-mobile"
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
        />
      </Stack>
    </Container>
  );
};

export default Header;
