"use client";

// import GridGenders from "@/components/sections/GridGenders/GridGenders";
import GridGenders from "@/components/sections/GridGenders";
import { getBooksGenders } from "@/services/fetch/getBooksGenders";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [dataBooks, setDataBooks] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=dBuIT7cVmQlS3wesMMkrKJuPGMssjMny"
      )
      .then((response) => {
        setDataBooks(response.data.results);
      })
      .catch(() => {
        // setIsOpen(true);
      });
  }, []);

  return (
    <>
      {/* {projects.results.map((i) => <p style={{ color: "black" }}>{i.list_name}</p>)} */}
      {dataBooks && <GridGenders dataGenders={dataBooks} />}
    </>
  );
}
