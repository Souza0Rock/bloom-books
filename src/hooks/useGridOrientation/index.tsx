// "use client"

// import { useEffect, useState } from "react";

// export const useGridOrientation = (): {
//   gridOrientation: string | false;
//   handleGridOrientation: (orientation: "rows" | "blocks") => void;
// } => {
//   const [gridOrientation, setGridOrientation] = useState(() => {
//     const storedOrientation =
//       (typeof window !== "undefined" &&
//         window.localStorage.getItem("grid_orientation")) ||
//       "rows";

//     return typeof window !== "undefined" && storedOrientation;
//   });

//   const handleGridOrientation = (orientation: "rows" | "blocks") => {
//     (typeof window !== "undefined" &&
//       window.localStorage.setItem("grid_orientation", orientation)) ||
//       "rows";

//     setGridOrientation(orientation);
//   };

//   const storedOrientation =
//   (typeof window !== "undefined" &&
//     window.localStorage.getItem("grid_orientation")) ||
//   "rows";

//   console.log(storedOrientation, "storedOrientation")

//   useEffect(() => {
//     return handleGridOrientation(storedOrientation);
//   }, [storedOrientation])

//   return {
//     gridOrientation,
//     handleGridOrientation,
//   };
// };

// import { useEffect, useState } from "react";

// export const useGridOrientation = (): {
//   gridOrientation: string | false;
//   handleGridOrientation: (orientation: "rows" | "blocks") => void;
// } => {
//   const [gridOrientation, setGridOrientation] = useState(() => {
//     const storedOrientation =
//       (typeof window !== "undefined" &&
//         window.localStorage.getItem("grid_orientation")) ||
//       "rows";

//     return storedOrientation;
//   });

//   const handleGridOrientation = (orientation: "rows" | "blocks") => {
//     (typeof window !== "undefined" &&
//       window.localStorage.setItem("grid_orientation", orientation));

//     setGridOrientation(orientation);
//   };

//   useEffect(() => {
//     const storedOrientation =
//       (typeof window !== "undefined" &&
//         window.localStorage.getItem("grid_orientation")) ||
//       "rows";

//     if (storedOrientation !== gridOrientation) {
//       setGridOrientation(storedOrientation);
//     }
//   }, [gridOrientation]);

//   return {
//     gridOrientation,
//     handleGridOrientation,
//   };
// };

import { useEffect, useState } from "react";

export const useGridOrientation = (): {
  gridOrientation: string | false;
  handleGridOrientation: (orientation: "rows" | "blocks") => void;
} => {
  const [gridOrientation, setGridOrientation] = useState<string | false>("rows");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedOrientation = window.localStorage.getItem("grid_orientation") || "rows";
      setGridOrientation(storedOrientation);
    }
  }, []);

  const handleGridOrientation = (orientation: "rows" | "blocks") => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("grid_orientation", orientation);
    }

    setGridOrientation(orientation);
  };

  return {
    gridOrientation,
    handleGridOrientation,
  };
};