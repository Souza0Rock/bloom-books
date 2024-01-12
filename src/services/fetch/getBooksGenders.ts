import { IGendersBooks } from "@/types/bookGenders";
import { nyTimesInstance } from "../connectApi";

export const getBooksGenders = async (): Promise<IGendersBooks> => {
  try {
    const { data } = await nyTimesInstance.get("books/v3/lists/names.json");
    return data;
  } catch (error) {
    throw error;
  }
};
