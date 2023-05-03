import path from "path";
import { readFile } from "fs/promises";

let data;

export default async function handler(req, res) {
  // url == `http://localhost:3000/api/company?title={}`

  if (!data) {
    const jsonDirectory = path.join(process.cwd(), "json");
    const fileData = await readFile(jsonDirectory + "../../data.json", {
      encoding: "utf-8",
    });
    const jsonData = JSON.parse(fileData);
    data = jsonData.details;
  }
  const { title } = req.query;
  if (!title) {
    return res.status(400).json({
      massage: "company name is required",
    });
  }

  const filterData = data.filter((element) =>
    element?.company_title.includes(title)
  );

  if (filterData.length === 0) {
    return res.status(404).json({
      massage: "company not found",
    });
  } else if (filterData.length > 1) {
    return res.status(500).json({
      massage: "more than one company found",
    });
  }

  res.status(200).json({ ...filterData[0] });
}
