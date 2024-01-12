"use client";

import React from "react";

const GridBlock: React.FC<{ color?: string; onClick?: (e?: any) => void }> = ({
  color = "#D0D3E2",
  onClick,
}) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <rect width="9" height="9" fill={color} />
      <rect y="10" width="9" height="9" fill={color} />
      <rect x="10" y="10" width="9" height="9" fill={color} />
      <rect x="10" width="9" height="9" fill={color} />
    </svg>
  );
};

export default GridBlock;
