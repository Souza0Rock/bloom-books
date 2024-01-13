import { nyTimesInstance } from "../connectApi";

export const getBooks = async (gender: string): Promise<TTeste> => {
  try {
    const { data } = await nyTimesInstance.get(`books/v3/lists/${gender}.json`);
    return data.results;
  } catch (error) {
    throw error;
  }
};
