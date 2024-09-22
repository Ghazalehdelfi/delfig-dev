import { useState } from "react";
const useWindowWidth = () => {
  const [width, setWindowWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  window.addEventListener("resize", updateDimensions);
  return width;
};

export default useWindowWidth;
