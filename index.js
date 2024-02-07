import { Onedoc } from "@onedoc/client";
import { readFileSync, writeFileSync } from "fs";
import {join} from 'path';

import dotenv from 'dotenv';
dotenv.config();

(async () => {
  const onedoc = new Onedoc(process.env.ONEDOC_API_KEY);

  let doc = {
    html: readFileSync('./assets/assignmentTemplate.html', 'utf8'),
    title: "Assignment_1",
    test: true,
    save: true,
    expiresIn: 30,
    assets: [
      // {
      //   path: "./resume.css",
      //   content: readFileSync(join(process.cwd(), "resume.css")).toString(),
      // },
    ],
  };

  const { file, link, error, info } = await onedoc.render(doc);

  if (error) {
    throw error;
  }

  console.log(link);
})();
