const useLocalStorage = () => {
  const getStoredValue = (key: string) => {
    const storedValue = localStorage.getItem(key) || "";
    return storedValue ? JSON.parse(storedValue) : "";
  };

  const setStoredValue = (key: string, newValue: any) => {
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return {
    getStoredValue,
    setStoredValue,
  };
};

export default useLocalStorage;
