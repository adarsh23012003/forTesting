import path from "path";
import { readFile } from "fs/promises";

let data;
const limit = 10;

export default async function handler(req, res) {
  // url == `http://localhost:3000/api/cities?states=${}&page=${}`
  // url == `http://localhost:3000/api/cities?states=${}&city=${}&page=1`
  if (!data) {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileData = await readFile(jsonDirectory + "../../data.json", {
      encoding: "utf-8",
    });
    const jsonData = JSON.parse(fileData);
    data = jsonData.details;
  }
  const { states, page, city } = req.query;

  if (!states) {
    res.status(400).json({ message: "state is required" });
  }

  let filterData;

  filterData = data.filter((element) => element?.locality.includes(states));

  if (city) {
    filterData = filterData.filter((e) => e?.locality.includes(city));
  }

  //   pagination
  const pageInt = parseInt(page);
  if (!page || isNaN(pageInt)) {
    res.status(400).json({ message: "invalid page number" });
  }

  //pagination
  const startIndex = (pageInt - 1) * limit;
  const stopIndex = startIndex + limit;
  const totalPages = Math.ceil(filterData.length / limit);
  res
    .status(200)
    .json({ data: filterData.slice(startIndex, stopIndex), totalPages });
}
