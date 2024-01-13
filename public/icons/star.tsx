import React from "react";

const Star: React.FC<{
  size?: number;
  color?: string;
  variant?: "outline" | "full";
}> = ({ size = 24, color = "#fff", variant = "full" }) => {
  return variant === "full" ? (
    <svg
      width={size}
      height={size - 1}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 1L8.1995 4.29127L12 4.82229L9.25 7.38275L9.899 11L6.5 9.29127L3.101 11L3.75 7.38275L1 4.82229L4.8005 4.29127L6.5 1Z"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width={size}
      height={size - 1}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 1L8.1995 4.29127L12 4.82229L9.25 7.38275L9.899 11L6.5 9.29127L3.101 11L3.75 7.38275L1 4.82229L4.8005 4.29127L6.5 1Z"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Star;
