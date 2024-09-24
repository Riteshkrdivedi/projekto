import { useState, useEffect } from "react";

const useMediaQuery = (width: number) => {
  const [isScreenWidth, setIsScreenWidth] = useState(false);

  useEffect(() => {
    const updateScreenWidth = () => {
      setIsScreenWidth(window.innerWidth >= width);
    };
    updateScreenWidth();

    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, [width]);

  return isScreenWidth;
};

export default useMediaQuery;
