import path from "path";
import { readFile } from "fs/promises";

let data;
const limit = 10;

export default async function handler(req, res) {
  if (!data) {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), "json");
    //Read the json data file data.json
    const fileData = await readFile(jsonDirectory + "../../data.json", {
      encoding: "utf-8",
    });
    const jsonData = JSON.parse(fileData);
    data = jsonData.details;
    // console.log("data loaded");
  }
  const { page } = req.query;
  if (!page) {
    return res.status(200).json(data);
  }
  const pageInt = parseInt(page);
  if (!page || isNaN(pageInt)) {
    res.status(400).json({ message: "invalid page number" });
  }

  //get data on this URL -- http://localhost:3000/api/staticdata?page=1
  //pagination
  const startIndex = (pageInt - 1) * limit;
  const stopIndex = startIndex + limit;
  const totalPages = Math.ceil(data.length / limit);
  res.status(200).json({ data: data.slice(startIndex, stopIndex), totalPages });
}
