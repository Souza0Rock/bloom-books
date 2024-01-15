import React, { useEffect, useRef } from "react";
import { useFavoriteBooks } from "@/contexts/FavoritesBooks";
import styled from "styled-components";
import Typography from "@/components/common/Typography";
import Stack from "@/components/common/Stack";
import Image from "next/image";
import Star from "../../../../public/icons/star";
import {
  Overlay,
  OverlaySecondary,
  Sidebar,
} from "./SidebarBooksFavorites.styled";

const SidebarBooksFavorites: React.FC = () => {
  const { openSidebar, handleOpenSidebar, favoriteBooks, handleFavoriteBook } =
    useFavoriteBooks();

  const selectRef = useRef<HTMLDivElement>(null);

  function handleEscKey(event: KeyboardEvent) {
    if (event.key === "Escape") {
      handleOpenSidebar();
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        handleOpenSidebar();
      }
    };

    if (openSidebar) {
      document.addEventListener("keydown", handleEscKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSidebar]);

  return (
    openSidebar && (
      <Overlay>
        <OverlaySecondary />
        <Sidebar ref={selectRef}>
          <Typography fontSize={18} fontWeight={700}>
            Favoritos
          </Typography>

          <Stack mt={0.625} gap={0.75}>
            {favoriteBooks ? (
              favoriteBooks.map((book) => (
                <Stack flexDirection="row" alignItems="center" gap={0.5}>
                  <Image
                    src={book.book_image}
                    alt={book.title}
                    width={32}
                    height={50}
                    style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
                  />
                  <Stack>
                    <Typography fontWeight={700} textTransform="uppercase">
                      {book.title}
                    </Typography>
                    <Stack flexDirection="row" alignItems="center">
                      <Typography color="#454A67" fontSize={12}>
                        by {book.author}
                      </Typography>
                      <Stack
                        px={0.25}
                        cursorPointer
                        onClick={() => handleFavoriteBook(book)}
                      >
                        <Star color="#5062F0" size={11} />
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              ))
            ) : (
              <Typography>Ops... Sem livros favoritados!</Typography>
            )}
          </Stack>
        </Sidebar>
      </Overlay>
    )
  );
};

export default SidebarBooksFavorites;
