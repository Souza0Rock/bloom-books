

import Image from "next/image";
import styles from "./page.module.css";
import Typography from "@/components/common/Typography";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GridGenders from "@/components/sections/GridGenders";
import { getBooksGenders } from "@/services/fetch/getBooksGenders";

// const getData = async () => {
//   const data = await getBooksGenders();

//   return { data };
// };

async function getProjects() {
  const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=Sd3Scmz7lLmxJU8aObe2oie9KSfbnyBB`)
  const projects = await res.json()
 
  return projects
}

export default async function Home() {
  // const { push } = useRouter()

  // useEffect(() => {
  //   getBooksGenders();
  // }, [])

  // console.log(teste, "teste");

  // const data = await getBooksGenders()

  // console.log(data, "data")
  const projects = await getProjects()

  console.log(projects, "projects")
  return (
    <>
    {projects.results.map((i) => <p style={{ color: "black" }}>{i.list_name}</p>)}
      <GridGenders />
    </>
  );
}
