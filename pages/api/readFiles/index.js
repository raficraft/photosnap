import fs from "fs";
import path from "path";

export default (req, res) => {
  const dir = path.resolve("./public", req.body.dir);

  try {
    const filenames = fs.readdirSync(dir);
    const validFiles = [];

    for (const file of filenames) {
      console.log(file);
      if (file.match(/.(jpg|jpeg|png|gif|svg)$/i)) {
        validFiles.push(file);
      }
    }

    res.status(200).json(validFiles);
  } catch (err) {
    res.status(500).json(err);
  }
};
