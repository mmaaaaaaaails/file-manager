import { stat } from "fs/promises"
import * as path from "path";
import * as fs from "fs";

export const getLs = async () => {
    try {
        await fs.readdir(process.cwd(), (err, files) => {
            files.map( async (file) => {
                let items = await stat(path.resolve(process.cwd(), file));
                if (items.isDirectory()) {
                    console.table(`Directory: ${file}`);
                } else {
                    console.table(`File: ${file}`);
                }
            })
        })
    } catch (e) {
        console.log(e.message);
    }
}
