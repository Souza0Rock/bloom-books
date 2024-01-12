"use client"

import React from "react";

const GridRows: React.FC<{ color?: string; onClick: (e?: any) => void }> = ({
  color = "#D0D3E2",
  onClick,
}) => {
  console.log(color, "color GridRows")
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      onClick={onClick}
    >
      <rect width="20" height="4" fill={color} />
      <rect y="5" width="20" height="4" fill={color} />
      <rect y="10" width="20" height="4" fill={color} />
      <rect y="15" width="20" height="4" fill={color} />
    </svg>
  );
};

export default GridRows;
