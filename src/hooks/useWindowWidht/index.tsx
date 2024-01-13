"use client"

import { useEffect, useState } from "react";

const useWindowWidht = () => {
  const [widthScreen, setWidthScreen] = useState(0);

  // @ts-ignore
  useEffect(() => {
    function handleResize() {
      setWidthScreen((typeof window !== "undefined" && window.innerWidth) || 0);
    }
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);
    return () =>
      typeof window !== "undefined" &&
      window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    typeof window !== "undefined" &&
      window.localStorage.setItem("responsiveWidth", widthScreen.toString());
  }, [widthScreen]);

  return {
    widthScreen,
  };
};

export default useWindowWidht;
