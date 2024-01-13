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
  const { setStoredValue } = useLocalStorage();
  const [favoriteBooks, setFavoriteBooks] = useState<any[]>([]);

  const handleFavoriteBook = (book: any) => {
    const isBookInFavorites = favoriteBooks.some((item) => item.title === book.title);
  
    if (isBookInFavorites) {
      // O livro já está nos favoritos, então remova-o
      const updatedItems = favoriteBooks.filter((i) => i.title !== book.title);
      setFavoriteBooks(updatedItems);
    } else {
      // O livro não está nos favoritos, então adicione-o
      setFavoriteBooks([...favoriteBooks, book]);
    }
  
    // Atualize o localStorage
    setStoredValue("favoriteBooks", JSON.stringify(favoriteBooks));
  };

  console.log(favoriteBooks, "favoriteBooks")
  // useEffect(() => {
  //   setStoredValue("favoriteBooks", JSON.stringify(favoriteBooks));
  // }, [favoriteBooks]);


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
