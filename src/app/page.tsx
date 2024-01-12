

import Image from "next/image";
import styles from "./page.module.css";
import Typography from "@/components/common/Typography";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GridGenders from "@/components/sections/GridGenders";
import { getBooksGenders } from "@/services/fetch/getBooksGenders";


export default async function Home() {
  // const projects = await getBooksGenders()

  // console.log(projects, "projects")
  return (
    <>
    {/* {projects.results.map((i) => <p style={{ color: "black" }}>{i.list_name}</p>)} */}
      <GridGenders />
    </>
  );
}
