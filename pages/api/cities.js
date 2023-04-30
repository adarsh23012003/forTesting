import path from "path";
import { readFile } from "fs/promises";

let data;

export default async function handler(req, res) {
  // url == `http://localhost:3000/api/cities?states=${}&page=${}&limit=${}`
  if (!data) {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileData = await readFile(jsonDirectory + "../../data.json", {
      encoding: "utf-8",
    });
    const jsonData = JSON.parse(fileData);
    data = jsonData.details;
  }
  const { states, page, limit } = req.query;
  const filterData = [];
  if (states) {
    data?.forEach((element) => {
      if (element?.locality.includes(states)) {
        filterData.push(element);
      }
    });
  }

  //   pagination
  const pageInt = parseInt(page);
  const limitInt = parseInt(limit);
  if (!page || isNaN(pageInt)) {
    res.status(400).json({ message: "invalid page number" });
  }
  if (!limit || isNaN(limitInt)) {
    res.status(400).json({ message: "invalid limit per page" });
  }

  //get data on this URL -- http://localhost:3000/api/staticdata?page=1&limit=1
  //pagination
  const startIndex = (pageInt - 1) * limitInt;
  const stopIndex = startIndex + limitInt;
  const totalPages = Math.ceil(data.length / limit);
  res.status(200).json({ data: data.slice(startIndex, stopIndex), totalPages });
}
