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
  handleFavoriteBook: (book: Partial<TBook>) => void;
  bookIsFavorited: (book: Partial<TBook>) => void;
  openSidebar: boolean;
  handleOpenSidebar: () => void;
};

interface IFavoritesBooks {
  children: ReactNode;
}

export const FavoriteBooksContext = createContext<TFavoriteBooksValue | null>(
  null
);

export function FavoriteBooksProvider({ children }: IFavoritesBooks) {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);
  const handleOpenSidebar = () => {
// console.log("oi");

    setOpenSidebar(!openSidebar)
  };

  const { setStoredValue, getStoredValue } = useLocalStorage();
  const [favoriteBooks, setFavoriteBooks] = useState<any[]>([]);

  const bookIsFavorited = (book: Partial<TBook>): boolean =>
    favoriteBooks.length > 0
      ? favoriteBooks.some((item) => item.title === book.title)
      : false;

  const handleFavoriteBook = (book: Partial<TBook>) => {
    if (bookIsFavorited(book)) {
      const updatedItems = favoriteBooks.filter((i) => i.title !== book.title);
      setFavoriteBooks(updatedItems);

      setStoredValue("favorite_books", updatedItems);
    } else {
      setFavoriteBooks([...favoriteBooks, book]);

      setStoredValue("favorite_books", [...favoriteBooks, book]);
    }
  };

  useEffect(() => {
    const storageFavorites = getStoredValue("favorite_books");
    setFavoriteBooks(storageFavorites);
  }, []);

  return (
    <FavoriteBooksContext.Provider
      value={{
        favoriteBooks,
        handleFavoriteBook,
        bookIsFavorited,
        openSidebar,
        handleOpenSidebar,
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
