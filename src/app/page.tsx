import GridGenders from "@/components/sections/GridGenders";
import { getBooksGenders } from "@/services/fetch/getBooksGenders";

export default async function Home() {
  const data = await getBooksGenders();
  
  return (
    <>
    {/* {projects.results.map((i) => <p style={{ color: "black" }}>{i.list_name}</p>)} */}
      <GridGenders data={data} />
    </>
  );
}
