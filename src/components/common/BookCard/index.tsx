import React from "react";
import { useGridOrientation } from "@/contexts/GridOrientation";
import { useFavoriteBooks } from "@/contexts/FavoritesBooks";
import { ContainerCardRow, ContainerCardBlock } from "./BookCard.styled";
import Typography from "../Typography";
import Stack from "../Stack";
import Button from "../Button";
import Image from "next/image";
import Star from "../../../../public/icons/star";

const BookCard: React.FC<{ data: TBook }> = ({ data }) => {
  const { gridOrientation } = useGridOrientation();
  const { handleFavoriteBook, bookIsFavorited } = useFavoriteBooks();

  const isFavorite = bookIsFavorited(data);

  return gridOrientation === "rows" ? (
    <ContainerCardRow flexDirection="row" gap={0.625}>
      <Image
        width={121}
        height={153}
        alt={data.title}
        src={data.book_image}
        className="image-row"
      />

      <Stack gap={0.75} className="content-box">
        <Stack>
          <Typography
            className="title"
            fontWeight={700}
            color="#0E1337"
            textTransform="uppercase"
          >
            {data.title}
          </Typography>
          <Stack
            mb={0.5}
            flexDirection="row"
            alignItems="center"
            className="box-author"
          >
            <Typography fontSize={12} color="#454A67" className="content-text">
              by {data.author}
            </Typography>
            <Stack
              px={0.25}
              cursorPointer
              onClick={() =>
                handleFavoriteBook({
                  title: data.title,
                  author: data.author,
                  book_image: data.book_image,
                })
              }
            >
              <Star
                size={11}
                color="#5062F0"
                variant={
                  typeof isFavorite === "boolean"
                    ? isFavorite
                      ? "full"
                      : "outline"
                    : "outline"
                }
              />
            </Stack>
          </Stack>
          <Typography className="content-text" fontSize={12}>
            {data.description}
          </Typography>
          <Typography className="content-text publisher" fontSize={12}>
            Editora Bloom
          </Typography>
          <Typography className="content-text" fontSize={12}>
            #{data.rank}
          </Typography>
        </Stack>

        <Button
          width="fit-content"
          onClick={() => window.open(data.amazon_product_url, "_blank")}
        >
          <Typography fontSize={12} fontWeight={700} color="#fff">
            Compre por R${data.price}
          </Typography>
        </Button>
      </Stack>
    </ContainerCardRow>
  ) : (
    <ContainerCardBlock flexDirection="column" gap={0.625}>
      <Image
        width={121}
        height={153}
        alt={data.title}
        src={data.book_image}
        className="image-block"
      />
      <Stack gap={0.75} height="100%" justifyContent="space-between">
        <Stack>
          <Typography
            fontWeight={700}
            color="#0E1337"
            textTransform="uppercase"
            className="title"
          >
            {data.title}
          </Typography>
          <Stack mb={0.5} flexDirection="row" alignItems="center">
            <Typography fontSize={12} color="#454A67" className="content-text">
              by {data.author}
            </Typography>
            <Stack
              px={0.25}
              cursorPointer
              onClick={() =>
                handleFavoriteBook({
                  title: data.title,
                  author: data.author,
                  book_image: data.book_image,
                })
              }
            >
              <Star
                size={11}
                color="#5062F0"
                variant={
                  typeof isFavorite === "boolean"
                    ? isFavorite
                      ? "full"
                      : "outline"
                    : "outline"
                }
              />
            </Stack>
          </Stack>
          <Typography className="content-text" fontSize={12}>
            {data.description}
          </Typography>
          <Typography className="content-text publisher" fontSize={12}>
            Editora Bloom
          </Typography>
          <Typography className="content-text" fontSize={12}>
            #{data.rank}
          </Typography>
        </Stack>

        <Button
          width="fit-content"
          onClick={() => window.open(data.amazon_product_url, "_blank")}
        >
          <Typography fontSize={12} fontWeight={700} color="#fff">
            Compre por R${data.price}
          </Typography>
        </Button>
      </Stack>
    </ContainerCardBlock>
  );
};

export default BookCard;
