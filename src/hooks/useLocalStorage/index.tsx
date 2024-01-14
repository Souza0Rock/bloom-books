const useLocalStorage = () => {
  const getStoredValue = (key: string) => {
    const storedValue = localStorage.getItem(key) || "";
    return storedValue ? JSON.parse(storedValue) : "";
  };

  const setStoredValue = (key: string, newValue: any) => {
    console.log(newValue, "newValue")
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return {
    getStoredValue,
    setStoredValue,
  };
};

export default useLocalStorage;
