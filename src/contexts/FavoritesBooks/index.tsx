import useLocalStorage from "@/hooks/useLocalStorage";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type TFavoriteBooksValue = {
  favoriteBooks: any[];
  handleFavoriteBook: (name: any) => void;
};

interface IFavoritesBooks {
  children: ReactNode;
}

export const FavoriteBooksContext = createContext<TFavoriteBooksValue | null>(
  null
);

export function FavoriteBooksProvider({ children }: IFavoritesBooks) {
  const { setStoredValue, getStoredValue } = useLocalStorage();
  const [favoriteBooks, setFavoriteBooks] = useState<any[]>([]);

  // const handleFavoriteBook = (book: any) => {
  //   const isBookInFavorites = favoriteBooks.some((item) => item.title === book.title);

  //   if (isBookInFavorites) {
  //     // O livro já está nos favoritos, então remova-o
  //     const updatedItems = favoriteBooks.filter((i) => i.title !== book.title);
  //     setFavoriteBooks(updatedItems);
  //   } else {
  //     // O livro não está nos favoritos, então adicione-o
  //     setFavoriteBooks([...favoriteBooks, book]);
  //   }

  //   // Atualize o localStorage
  //   setStoredValue("favoriteBooks", JSON.stringify(favoriteBooks));
  // };

  const handleFavoriteBook = (book: any) => {
    // console.log(favoriteBooks, "favoriteBooks toogle array")
    // console.log(book, "book toogle array")
    // console.log(favoriteBooks.includes(book.title), "includes")
    // console.log(favoriteBooks.some((item) => item.title === book.title), "some")

    // console.log(favoriteBooks.filter((i) => i.title !== book.title), "remover")
    const isBookInFavorites = favoriteBooks.some(
      (item) => item.title === book.title
    );

    if (isBookInFavorites) {
      const updatedItems = favoriteBooks.filter((i) => i.title !== book.title);
      setFavoriteBooks(updatedItems);

      setStoredValue("favorite_books", updatedItems);
    } else {
      setFavoriteBooks([...favoriteBooks, book]);

      setStoredValue("favorite_books", [...favoriteBooks, book]);
    }
  };

  useEffect(() => {
    const teste = getStoredValue("favorite_books")

    setFavoriteBooks(teste)
    // console.log(teste, "teste")
  }, [])

  // console.log(favoriteBooks, "favorite_books")
  // useEffect(() => {
  //   setStoredValue("favorite_books", favoriteBooks);
  // }, [favoriteBooks.length > 0]);



  return (
    <FavoriteBooksContext.Provider
      value={{
        favoriteBooks,
        handleFavoriteBook,
      }}
    >
      {children}
    </FavoriteBooksContext.Provider>
  );
}

export function useFavoriteBooks() {
  const context = useContext(FavoriteBooksContext);

  if (!context) {
    throw new Error(
      "useFavoriteBooksContext must be used within an FavoriteBooksProvider"
    );
  }
  return context;
}
