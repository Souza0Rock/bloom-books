import React, { useEffect, useRef } from "react";
import { useFavoriteBooks } from "@/contexts/FavoritesBooks";
import styled from "styled-components";
import Typography from "@/components/common/Typography";
import Stack from "@/components/common/Stack";
import Image from "next/image";
import Star from "../../../../public/icons/star";

const SidebarBooksFavorites: React.FC = () => {
  const OpacitySidebar = styled.div`
    margin-top: 2.5rem;

    width: 100vw;

    height: calc(100vh - 2.5rem);

    display: flex;
    position: fixed;
    z-index: 99999;
    background-color: rgba(0, 0, 0, 0.4);

    @media (min-width: 768px) {
      margin-top: 3.75rem;
    }
  `;

  const Sidebar = styled.div`
    position: absolute;
    right: 0;
    width: 400px;
    height: calc(100vh - 2.5rem);
    background-color: #fff;
    border-top: 6px solid #0b1a8e;

    padding: 0.75rem;
    overflow-x: auto;

    @media (max-width: 600px) {
      width: 85%;
    }

    @media (min-width: 768px) {
      height: calc(100vh - 3.75rem);
    }
  `;
  const { openSidebar, handleOpenSidebar, favoriteBooks } = useFavoriteBooks();

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
      <OpacitySidebar>
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
                      <Stack px={0.25}>
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
      </OpacitySidebar>
    )
  );
};

export default SidebarBooksFavorites;
